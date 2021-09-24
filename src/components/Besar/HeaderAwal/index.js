import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, fonts, getData, responsiveHeight} from '../../../utils';
import {Jarak, Tombol} from '../../kecil';
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

    //jika itu halaman home kita navigate ke CariLokasi
    if (page !== 'CariLokasi') {
      navigation.navigate('CariLokasi');
    }

    //kembalikan state search itu ke string kosong
    this.setState({
      search: '',
    });
  };

  render() {
    const {navigation, getListKeranjangResult} = this.props;

    let totalKeranjang;

    if (getListKeranjangResult) {
      totalKeranjang = Object.keys(getListKeranjangResult.pesanans).length;
    }

    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <View style={styles.searchSection}>
            <Text style={styles.input}>PsychoTech.com</Text>
          </View>
          <Jarak width={10} />
          <Tombol
            icon="keranjang"
            padding={10}
            onPress={() => navigation.navigate('Keranjang')}
            totalKeranjang={totalKeranjang}
          />
        </View>
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
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: 'center',
    color: colors.white,
  },
  input: {
    fontSize: 35,
    fontFamily: fonts.primary.bold,
    color: colors.white,
  },
});
