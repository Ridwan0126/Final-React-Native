import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {CardAlamat, Jarak, Pilihan, Tombol} from '../../components';
import {colors, fonts, numberWithCommas, responsiveHeight} from '../../utils';
import {dummyPesanans, dummyProfile} from '../../data';

export default class ChectOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      pesanan: dummyPesanans[0],
      ekspedisi: [],
    };
  }

  render() {
    const {profile, pesanan, ekspedisi} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.isi}>
          <Text style={styles.textBold}>Apakah Alamat Ini Benar? </Text>
          <CardAlamat profile={profile} />
          <View style={styles.totalHarga}>
            <Text style={styles.textBolds}>Total Harga :</Text>
            <Text style={styles.textBolds}>
              Rp. {numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>
          <Pilihan label="Pilih Ekspedisi" datas={ekspedisi} />
          <Jarak height={10} />
          <Text style={styles.textBold}>Biaya Ongkir</Text>
          <View style={styles.ongkir}>
            <Text style={styles.text}>
              Untuk Berat :{numberWithCommas(pesanan.berat)} kg
            </Text>
            <Text style={styles.textBold}>Rp. {numberWithCommas(15000)} </Text>
          </View>

          <View style={styles.ongkir}>
            <Text style={styles.text}>Estimasi Waktu</Text>
            <Text style={styles.textBold}>
              {2} - {3} hari
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(pesanan.totalHarga + 15000)}
            </Text>
          </View>
          <Tombol
            tittle="Bayar"
            type="textIcon"
            fontSize={18}
            padding={responsiveHeight(15)}
            icon="Keranjang"
            onPress={() => this.props.navigation.navigate('CheckOut')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 25,
    justifyContent: 'space-between',
  },
  isi: {
    paddingHorizontal: 30,
  },
  textBold: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textBolds: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
  },
  ongkir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 11,
    paddingBottom: 30,
  },
});
