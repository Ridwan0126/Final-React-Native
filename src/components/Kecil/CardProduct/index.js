import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, numberWithCommas, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardProduct = ({Product, navigation}) => {
  return (
    <View key={Product.id} style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={{uri: Product.gambar[0]}} style={styles.image} />
        <View>
          <Text style={styles.tittle}>{Product.nama}</Text>
          <Text style={styles.bold}>Rp. {numberWithCommas(Product.harga)}</Text>
          <Text style={styles.bold}>{Product.nilai}</Text>
        </View>
      </TouchableOpacity>
      <Tombol
        type="text"
        tittle="Details"
        padding={7}
        onPress={() => navigation.navigate('ProductDetail', {Product})}
      />
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: 135,
    height: 135,
    alignItems: 'center',
  },
  tittle: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    textTransform: 'capitalize',
    // marginRight: 10,
    textAlign: 'center',
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(180),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    // justifyContent: 'space-between',
    // marginBottom: 10,
  },
  bold: {
    marginLeft: -20,
    fontFamily: fonts.primary.regular,
  },
});
