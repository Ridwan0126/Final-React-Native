import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  colors,
  fonts,
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

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.route.params.products,
      images: this.props.route.params.products.gambar,
    };
  }

  render() {
    const {navigation} = this.props;
    const {product, images} = this.state;
    console.log('Param', this.props.route.params);
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Tombol
            icon="Kembali"
            padding={7}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.head}>
            <Text style={styles.Judul}>{product.nama}</Text>
          </View>
        </View>
        <ProductSlider images={images} />
        <View style={styles.cont}>
          <View style={styles.ftr}>
            <CardFitur fitur={product.jenis} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.nama}>{product.nama}</Text>
            <Text>Lokasi : {product.lokasi}</Text>
            <Text style={styles.harga}>
              Harga : Rp. {numberWithCommas(product.harga)}
            </Text>
            <View style={styles.garis} />
            <View style={styles.wrap}>
              <Text style={styles.jenis}>Jenis : {product.jenisHotel}</Text>
              <Text style={styles.jenis}>Rate : {product.nilai}</Text>
            </View>
            <View>
              <Text style={styles.jenis}>Deskripsi :</Text>
              <Text style={styles.jenis}>{product.tentang}</Text>
            </View>
            <View style={styles.inpt}>
              <Inputan label="Jumlah" textareas fontSize={13} />
              <Pilihan
                label="Kamar"
                width={responsiveWidth(166)}
                height={responsiveHeight(35)}
                fontSize={13}
                datas={product.kamar}
              />
            </View>
            <Inputan
              label="Keterangan"
              textarea
              placeholder="Anda Dapat Memberikan Keterangan di Sini"
            />
            <Jarak height={15} />
            <Tombol
              tittle="Masuk Keranjang"
              type="textIcon"
              icon="KeranjangMasuk"
              padding={responsiveHeight(50)}
              fontSize={18}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  cont: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(493),
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
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: RFValue(24, heightMobileUI),
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
    fontSize: RFValue(30, heightMobileUI),
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
