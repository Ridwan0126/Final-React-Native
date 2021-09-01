import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardFitur = ({fitur}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={fitur.gambar} style={styles.Fiturs} />
    </TouchableOpacity>
  );
};

export default CardFitur;

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
    padding: 8,
    borderRadius: 15,
  },
  Fiturs: {
    width: responsiveWidth(25),
    height: responsiveHeight(35),
  },
});
