import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Jarak} from '../../components';
import {colors, fonts, numberWithCommas} from '../../utils';

const Pembayaran = ({
  getListContohLoading,
  getListContohResult,
  getListContohError,
  navigation,
}) => {
  console.log('GET CONTOH LOIST DI PEMBAYARAN ===>', getListContohResult);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {getListContohResult ? (
          getListContohResult.map(item => {
            console.log('LIST ITEM KEY ===>', item);
            return (
              <View style={styles.cont} key={item.id}>
                <Text style={styles.Judul}>
                  Pembayaran Pajak Bumi dan Bangunan
                </Text>
                <View style={styles.header}>
                  <Text style={styles.title}>Atas Nama</Text>
                  <Text style={styles.subTitle}>{item.nama}</Text>
                  <Text style={styles.title}>Nomor NOP</Text>
                  <Text style={styles.subTitle}>{item.nop}</Text>
                  <Text style={styles.title}>Jenis Pajak</Text>
                  <Text style={styles.subTitle}>{item.jenis}</Text>
                  <Text style={styles.title}>Alamat Tinggal</Text>
                  <Text style={styles.subTitle}>{item.alamat}</Text>
                  <Text style={styles.title}>Alamat Objek Pajak</Text>
                  <Text style={styles.subTitle}>{item.objek}</Text>
                  <Text style={styles.title}>Tahun Pembayaran</Text>
                  <Text style={styles.subTitle}>{item.tahun}</Text>
                  <Text style={styles.title}>Estimasi Pembayaran</Text>
                  <Text style={styles.subTitle}>{item.estimasi}</Text>
                  <Text style={styles.title}>Jatuh Tempo</Text>
                  <Text style={styles.subTitle}>{item.tempo}</Text>
                  <View style={styles.garis} />
                  <View style={styles.tagihan}>
                    <View>
                      <Text style={styles.titles}>Jumlah Tagihan</Text>
                      {/* <Text style={styles.titles}>Status Pembayaran</Text> */}
                    </View>
                    <View>
                      <Text style={styles.subTitle}>
                        Rp. {numberWithCommas(item.tagihan)}
                      </Text>
                      {/* <Text style={styles.subTitle}>{item.status}</Text> */}
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.tombol}
                    onPress={() => navigation.navigate('BayarTagihan')}>
                    <Text style={styles.titleTombol}>Bayar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : getListContohLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListContohError ? (
          <Text>{getListContohError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  getListContohLoading: state.ContohReducer.getListContohLoading,
  getListContohResult: state.ContohReducer.getListContohResult,
  getListContohError: state.ContohReducer.getListContohError,
});
export default connect(mapStateToProps, null)(Pembayaran);

const styles = StyleSheet.create({
  container: {
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
    fontFamily: fonts.primary.semibold,
    textAlign: 'right',
    margin: 5,
  },
  tagihan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
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
});
