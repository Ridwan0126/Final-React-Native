import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {dummyPesanans} from '../../data/dummyPesanan';
import {ListKeranjang, Tombol} from '../../components';
import {colors, fonts, numberWithCommas, responsiveHeight} from '../../utils';

export default class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pesanan: dummyPesanans[0],
    };
  }

  render() {
    const {pesanan} = this.state;
    return (
      <View style={styles.page}>
        <ListKeranjang keranjangs={pesanan.pesanans} />
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>
          <Tombol
            tittle="Check Out"
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
    flex: 1,
    backgroundColor: colors.white,
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
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textBold: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
  },
});
