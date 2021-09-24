import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardFitur = ({fitur, navigation, id}) => {
  const toProductByFitur = () => {
    navigation.navigate('ListProduct');
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toProductByFitur(id, fitur.namaFitur)}>
      <Image source={fitur.gambar} style={styles.Fiturs} />
    </TouchableOpacity>
  );
};

export default connect()(CardFitur);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    padding: 8,
    borderRadius: 15,
  },
  Fiturs: {
    width: responsiveWidth(35),
    height: responsiveHeight(45),
  },
});
