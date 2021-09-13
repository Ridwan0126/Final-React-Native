import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {
  colors,
  fonts,
  getData,
  heightMobileUI,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {
  CardFitur,
  CardProduct,
  Tombol,
  ProductSlider,
  Inputan,
  Pilihan,
  Jarak,
} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getDetailFitur} from '../../actions/FiturAction';
// import {masukKeranjang} from '../../actions/KeranjangAction';
import {dummyProduct} from '../../data';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.route.params.Product,
      images: this.props.route.params.Product.thumbnailURL,
      jumlah: '',
      pilihan: dummyProduct,
      keterangan: '',
      uid: '',
    };
  }

  componentDidMount() {
    const {product} = this.state;
    this.props.dispatch(getDetailFitur(product.idProduct));
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

  // masukKeranjang = () => {
  //   const {jumlah, keterangan, pilihan} = this.state;
  //   getData('user').then(res => {
  //     if (res) {
  //       //ambil user uid simpan di state
  //       this.setState({
  //         uid: res.uid,
  //       });

  //       //validasi form
  //       if (jumlah && pilihan && keterangan) {
  //         //dispatch ke action masukKeranjang
  //         this.props.dispatch(masukKeranjang(this.state));
  //       } else {
  //         Alert.alert('Error', 'Jumlah, pilihan & Keterangan harus diisi');
  //       }
  //     } else {
  //       Alert.alert('Info', 'Silahkan Login Terlebih Dahulu');
  //       this.props.navigation.replace('Login');
  //     }
  //   });
  // };

  render() {
    const {navigation, getDetailProductResult, saveKeranjangLoading} =
      this.props;
    const {product, images, jumlah, keterangan, pilihan} = this.state;
    console.log('Param', this.props.route.params.Product);
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.Judul}>{product.namaProduct}</Text>
        </View>
        <View style={styles.button}>
          <Tombol
            icon="Kembali"
            padding={7}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.head}>
            <Text style={styles.Judul}>{product.namaProduct}</Text>
          </View>
        </View>
        {/* <ProductSlider images={images} /> */}
        <View style={styles.cont}>
          <View style={styles.ftr}>
            <CardFitur
              id={product.idProduct}
              fitur={getDetailProductResult}
              navigation={navigation}
            />
          </View>
          <View style={styles.desc}>
            <Text style={styles.nama}>{product.namaProduct}</Text>
            <Text>Lokasi : {product.namaProduct}</Text>
            <Text style={styles.harga}>Harga : Rp. {product.namaProduct}</Text>
            <View style={styles.garis} />
            <View style={styles.wrap}>
              <Text style={styles.jenis}>Jenis : {product.namaProduct}</Text>
              <Text style={styles.jenis}>Rate : {product.nameProduct}</Text>
            </View>
            <View>
              <Text style={styles.jenis}>Deskripsi :</Text>
              <Text style={styles.jenis}>{product.namaProduct}</Text>
            </View>
            <View style={styles.inpt}>
              <Inputan
                // value={product.hargajual}
                label="Jumlah"
                textareas
                fontSize={13}
                // onChangeText={hargaJual => this.setState({hargaJual})}
                keyboardType="number-pad"
              />
              <Pilihan
                label="Kamar"
                // width={responsiveWidth(166)}
                // height={responsiveHeight(35)}
                fontSize={13}
                // datas={pilihan}
                // onValueChange={pilihan => this.setState({pilihan})}
                // selectedValue={pilihan}
              />
            </View>
            <Inputan
              label="Keterangan"
              textarea
              placeholder="Anda Dapat Memberikan Keterangan di Sini"
              // value={product.hargajual}
              // onChangeText={hargaJual => this.setState({hargaJual})}
            />
            <Jarak height={15} />
            <Tombol
              tittle="Masuk Keranjang"
              type="textIcon"
              icon="KeranjangMasuk"
              padding={responsiveHeight(50)}
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
  getDetailProductResult: state.FiturReducer.getDetailProductResult,

  saveKeranjangLoading: state.KeranjangReducer.saveKeranjangLoading,
  saveKeranjangResult: state.KeranjangReducer.saveKeranjangResult,
  saveKeranjangError: state.KeranjangReducer.saveKeranjangError,
});

export default connect(mapStateToProps, null)(ProductDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  cont: {
    position: 'absolute',
    bottom: 0,
    // height: responsiveHeight(493),
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  desc: {
    marginHorizontal: 30,
  },
  nama: {
    // fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    // fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.light,
  },
  ftr: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30,
  },
  garis: {
    borderWidth: 0.5,
    marginVertical: 5,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  jenis: {
    fontSize: 13,
    fontFamily: fonts.primary.regular,
    // marginRight: 30,
  },
  Judul: {
    // fontSize: RFValue(30, heightMobileUI),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
    color: colors.white,
  },
  head: {
    marginLeft: 20,
  },
  inpt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
