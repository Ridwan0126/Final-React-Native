import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';
import {colors, fonts, getData} from '../../../utils';
import {Search} from '../../../assets';
import {Jarak} from '../../kecil';
import {connect} from 'react-redux';
import {saveKeywordPbb} from '../../../actions/PbbAction';
import {getListKeranjang} from '../../../actions/KeranjangAction';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    getData('user').then(res => {
      if (res) {
        this.props.dispatch(getListKeranjang(res.uid));
      }
    });
  }

  selesaiCari = () => {
    const {page, navigation, dispatch} = this.props;
    const {search} = this.state;

    //jalankan action save keyword
    dispatch(saveKeywordPbb(search));

    //jika itu halaman home kita navigate ke ListPbb
    if (page !== 'ListPbb') {
      navigation.navigate('ListPbb');
    }

    //kembalikan state search itu ke string kosong
    this.setState({
      search: '',
    });
  };

  render() {
    const {search} = this.state;
    const {getListKeranjangResult} = this.props;
    let totalKeranjang;

    if (getListKeranjangResult) {
      totalKeranjang = Object.keys(getListKeranjangResult.pesanans).length;
    }

    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* Input Pencarian  */}
          <View style={styles.searchSection}>
            <Search />
            <TextInput
              placeholder="Masukkan Nomor Objek Pajak NOP"
              style={styles.input}
              value={search}
              onChangeText={search => this.setState({search})}
              onSubmitEditing={() => this.selesaiCari()}
            />
          </View>
          <Jarak width={10} />
        </View>
        <Text style={styles.textSPPT}>
          {' '}
          Temukan NOP di pojok kiri atas SPPT{' '}
        </Text>
        <View>
          <Text style={styles.catatan}>Catatan Penting</Text>
        </View>
        <ScrollView horizontal>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.card}>
              <Text>Jatuh tempo pembayaran </Text>
              <Text>PBB-P2 tahun 2021 untuk wilayah kota</Text>
              <Text>cirebon adalah 30 September </Text>
              <Text>2021.</Text>
            </View>
            <View style={styles.card}>
              <Text>Satu pengguna Dapat melakukan</Text>
              <Text>pembayaran lebih dari satu NOP</Text>
              <Text>atas nama pajak lainnya.</Text>
            </View>
            <View style={styles.card}>
              <Text>Keterlambayan pembayaran akan</Text>
              <Text>dikenakan denda sebesar 2% setiap</Text>
              <Text>bulan dari jumlah pajak tertagih.</Text>
            </View>
            <View style={styles.card}>
              <Text>masa denda keterlambatan</Text>
              <Text>maksimal adalah 2 tahun atau setara</Text>
              <Text>dengan 48% dari jumlah pajak </Text>
              <Text>tertaih.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
});

export default connect(mapStateToProps, null)(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  wrapperHeader: {
    marginHorizontal: 50,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    borderBottomWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
  },
  textSPPT: {
    marginLeft: 20,
    marginTop: 10,
  },
  card: {
    paddingHorizontal: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.48,
    shadowRadius: 16.0,

    elevation: 24,
  },
  catatan: {
    margin: 10,
  },
});
