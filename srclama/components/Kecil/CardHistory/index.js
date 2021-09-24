import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts, numberWithCommas, responsiveWidth} from '../../../utils';
import Jarak from '../Jarak';

const CardHistory = ({pesanan}) => {
  console.log('DATA DI CARD PRODUCT API ====>', pesanan);
  return (
    <View key={pesanan.id} style={styles.container}>
      <View style={styles.history}>
        <Text style={styles.Judul}>{pesanan.id}. </Text>
        <Text style={styles.Judul}>Pembayaran Pajak Bumi dan Bangunan</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Atas Nama</Text>
        <Text style={styles.subTitle}>{pesanan.nama}</Text>
        <Text style={styles.title}>Nomor NOP</Text>
        <Text style={styles.subTitle}>{pesanan.nop}</Text>
        <Text style={styles.title}>Jenis Pajak</Text>
        <Text style={styles.subTitle}>{pesanan.jenis}</Text>
        <Text style={styles.title}>Alamat Tinggal</Text>
        <Text style={styles.subTitle}>{pesanan.alamat}</Text>
        <Text style={styles.title}>Alamat Objek Pajak</Text>
        <Text style={styles.subTitle}>{pesanan.objek}</Text>
        <Text style={styles.title}>Tahun Pembayaran</Text>
        <Text style={styles.subTitle}>{pesanan.tahun}</Text>
        <Text style={styles.title}>Estimasi Pembayaran</Text>
        <Text style={styles.subTitle}>{pesanan.estimasi}</Text>
        <Text style={styles.title}>Jatuh Tempo</Text>
        <Text style={styles.subTitle}>{pesanan.tempo}</Text>
        <View style={styles.garis} />
      </View>
      <View style={styles.footer}>
        <View style={styles.label}>
          <Text style={styles.textBlue}>Keterlambatan :</Text>
          <Text style={styles.textBlue}>Jumlah Tertagih :</Text>
          <Text style={styles.textBlue}>Biaya Admin :</Text>
          <Text style={styles.textBlue}>Biaya Keterlambatan :</Text>
          <Text style={styles.textBlue}>Total Tagihan :</Text>
          <Text style={styles.textBlue}>Status :</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.textBlue}>{pesanan.telat}</Text>
          <Text style={styles.textBlue}>
            Rp. {numberWithCommas(pesanan.tagihan)}
          </Text>
          <Text style={styles.textBlue}>
            Rp. {numberWithCommas(pesanan.admin)}
          </Text>
          <Text style={styles.textBlue}>
            Rp. {numberWithCommas(pesanan.keterlambatan)}
          </Text>
          <Text style={styles.textBlue}>
            Rp.{' '}
            {numberWithCommas(
              pesanan.tagihan + pesanan.admin + pesanan.keterlambatan,
            )}
          </Text>
          <Text style={styles.textBlue}>{pesanan.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  history: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Product: {
    width: responsiveWidth(66),
    height: responsiveWidth(66),
    marginHorizontal: 5,
  },
  desc: {
    marginLeft: responsiveWidth(7),
  },
  nama: {
    fontSize: 13,
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: 12,
    fontFamily: fonts.primary.regular,
  },
  textBold: {
    fontSize: 11,
    fontFamily: fonts.primary.bold,
  },
  footer: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
  },
  textBlue: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  container2: {
    // borderRadius: 15,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  cont: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 30,
  },
  Judul: {
    fontSize: 19,
    fontFamily: fonts.primary.bold,
  },
  title: {
    margin: 5,
    backgroundColor: '#E9E9E9',
    // fontFamily: fonts.primary.semibold,
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
  garis: {
    borderWidth: 0.5,
    marginVertical: 5,
  },
  header: {
    marginTop: 28,
  },
  titles: {
    margin: 5,
    // backgroundColor: '#E9E9E9',
    // fontFamily: fonts.primary.semibold,
  },
  tombol: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 15,
    margin: 8,
    // marginVertical: 20,
    // marginHorizontal: 10,
  },
  titleTombol: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.primary.bold,
  },
  rincian: {
    fontFamily: fonts.primary.bold,
    fontSize: 20,
  },
});
