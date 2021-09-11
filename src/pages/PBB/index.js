import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Pilihan, Tombol} from '../../components';
import {dummyProduct} from '../../data';
import {responsiveHeight, responsiveWidth} from '../../utils';
import {colors, fonts} from '../../utils';

export default class PBB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pilihan: dummyProduct,
      // pilihan: '',
    };
  }

  render() {
    const {pilihan} = this.state;
    const {navigation} = this.props;
    console.log('Pilihan PBB', pilihan);
    return (
      <View style={styles.conatiner}>
        <TextInput
          placeholder="Masukkan Nomor Objek Pajak NOP"
          // autoFocus
          style={{
            borderBottomWidth: 0.5,
            marginTop: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
        />
        <Text style={styles.textSPPT}>
          {' '}
          Temukan NOP di pojok kiri atas SPPT{' '}
        </Text>
        <View>
          <Text style={styles.tahun}>Tahun Pembayaran</Text>
          <TextInput
            placeholder="tahun"
            // autoFocus
            style={{
              borderBottomWidth: 0.5,
              marginTop: 10,
              marginHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.simpan}>
          <Text>Simpan NOP</Text>
          <Text>0/10</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.tombol}
            onPress={() => navigation.navigate('Pembayaran')}>
            <Text style={styles.titleTombol}>Lihat Tagihan</Text>
          </TouchableOpacity>
        </View>
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
        {/* <Pilihan
          label="Tahun"
          width={responsiveWidth(50)}
          height={responsiveHeight(35)}
          datas={pilihan}
          onValueChange={pilihan => this.setState({pilihan})}
          selectedValue={pilihan}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
  },
  card: {
    paddingHorizontal: 20,
    // paddingVertical: 50,
    // borderWidth: 1,
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
  textSPPT: {
    marginLeft: 20,
    marginTop: 10,
  },
  tahun: {
    margin: 25,
    // marginLeft: 23,
  },
  simpan: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#E9E9E9',
    width: responsiveWidth(415),
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tombol: {
    backgroundColor: '#0085FF',
    borderRadius: 5,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  titleTombol: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.primary.bold,
  },
  catatan: {
    margin: 10,
  },
});
