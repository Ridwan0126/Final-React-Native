import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Hapus} from '../../../assets';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import Jarak from '../Jarak';

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <Image source={keranjang.product.gambar[0]} style={styles.gambar} />
      <View style={styles.desc}>
        <Text style={styles.nama}>{keranjang.product.nama}</Text>
        <Text style={styles.text}>
          Rp. {numberWithCommas(keranjang.product.harga)}
        </Text>
        <Jarak height={responsiveHeight(12)} />
        <Text style={styles.textBold}>
          Pesan : <Text style={styles.text}>{keranjang.jumlahPesan}</Text>
        </Text>
        <Text style={styles.textBold}>
          Jenis : <Text style={styles.text}>{keranjang.jenisHotel}</Text>
        </Text>
        <Text style={styles.textBold}>
          Total Harga :
          <Text style={styles.text}>
            Rp. {numberWithCommas(keranjang.totalHarga)}
          </Text>
        </Text>
        <Text style={styles.textBold}>Keterangan :</Text>
        <Text style={styles.textBold}>
          <Text style={styles.text}>{keranjang.keterangan}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.iconHapus}>
        <Hapus />
      </TouchableOpacity>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    // justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 10,
    // padding: responsiveHeight(15),
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  gambar: {
    width: responsiveWidth(88),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  desc: {
    marginLeft: 10,
  },
  iconHapus: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 13,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
  },
});
