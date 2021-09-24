import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  heightMobileUI,
  responsiveWidth,
  getData,
} from '../../utils';
import {Inputan, Jarak, Tombol} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getDetailFitur} from '../../actions/FiturAction';
import {masukKeranjang} from '../../actions/KeranjangAction';

class PbbDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pbb: this.props.route.params.pbb,
      images: this.props.route.params.pbb.gambar,
      jumlah: '',
      ukuran: '',
      keterangan: '',
      uid: '',
    };
  }

  componentDidMount() {
    const {pbb} = this.state;
    console.log('parameter', pbb);

    this.props.dispatch(getDetailFitur(pbb.liga));
  }

  componentDidUpdate(prevProps) {
    const {saveKeranjangResult} = this.props;

    if (
      saveKeranjangResult &&
      prevProps.saveKeranjangResult !== saveKeranjangResult
    ) {
      this.props.navigation.navigate('Keranjang');
    }
  }

  masukKeranjang = () => {
    const {jumlah} = this.state;
    getData('user').then(res => {
      if (res) {
        //ambil user uid simpan di state
        this.setState({
          uid: res.uid,
        });

        //validasi form
        if (jumlah) {
          //dispatch ke action masukKeranjang
          this.props.dispatch(masukKeranjang(this.state));
        } else {
          Alert.alert('Error', 'Jumlah, Ukuran & Keterangan harus diisi');
        }
      } else {
        Alert.alert('Info', 'Silahkan Login Terlebih Dahulu');
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {navigation, saveKeranjangLoading} = this.props;
    const {pbb, jumlah} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol
            icon="arrow-left"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <Text style={styles.Title}>{pbb.nama}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.desc}>
            <View style={styles.header}>
              <Text style={styles.title}>Atas Nama</Text>
              <Text style={styles.subTitle}>{pbb.nama}</Text>
              <Text style={styles.title}>Nomor NOP</Text>
              <Text style={styles.subTitle}>{pbb.nop}</Text>
              <Text style={styles.title}>Jenis Pajak</Text>
              <Text style={styles.subTitle}>{pbb.jenis}</Text>
              <Text style={styles.title}>Alamat Tinggal</Text>
              <Text style={styles.subTitle}>{pbb.alamat}</Text>
              <Text style={styles.title}>Alamat Objek Pajak</Text>
              <Text style={styles.subTitle}>{pbb.objek}</Text>
              <Text style={styles.title}>Estimasi Pembayaran</Text>
              <Text style={styles.subTitle}>{pbb.estimasi}</Text>
              <Text style={styles.title}>Jatuh Tempo</Text>
              <Text style={styles.subTitle}>{pbb.tempo}</Text>
              <View style={styles.garis} />
              <Text style={styles.rincian}>Rincian Tagihan</Text>
              <View style={styles.tagihan}>
                <View>
                  <Text style={styles.titles}>Jumlah Tagihan</Text>
                </View>
                <View>
                  <Text style={styles.subTitle}>
                    Rp. {numberWithCommas(pbb.tagihan)}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.wrapperInput}>
              <Inputan
                label="Jumlah Tagihan"
                width={responsiveWidth(166)}
                height={responsiveHeight(43)}
                fontSize={13}
                value={jumlah}
                onChangeText={jumlah => this.setState({jumlah})}
                keyboardType="number-pad"
              />
            </View>
            <Jarak height={15} />
            <Tombol
              title="Masuk Ke Keranjang"
              type="textIcon"
              icon="keranjang-putih"
              padding={responsiveHeight(17)}
              fontSize={18}
              onPress={() => this.masukKeranjang()}
              loading={saveKeranjangLoading}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  saveKeranjangLoading: state.KeranjangReducer.saveKeranjangLoading,
  saveKeranjangResult: state.KeranjangReducer.saveKeranjangResult,
  saveKeranjangError: state.KeranjangReducer.saveKeranjangError,
});

export default connect(mapStateToProps, null)(PbbDetail);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(765),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
    zIndex: 1,
  },
  desc: {
    marginHorizontal: 30,
    marginTop: 40,
  },
  nama: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.light,
  },
  liga: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30,
  },
  garis: {
    borderWidth: 0.5,
    marginVertical: 5,
  },
  wrapperJenisBerat: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  jenisBerat: {
    fontSize: 13,
    fontFamily: fonts.primary.regular,
    marginRight: 30,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Title: {
    margin: 40,
    marginLeft: 90,
    color: 'white',
    fontSize: 20,
  },

  header: {
    marginTop: 28,
  },
  title: {
    margin: 5,
    backgroundColor: '#E9E9E9',
    padding: 2,
  },
  subTitle: {
    fontFamily: fonts.primary.regular,
    textAlign: 'right',
    margin: 5,
  },
  tagihan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
});
