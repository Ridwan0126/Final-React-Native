import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {getListFitur} from '../../../actions/FiturAction';
import {getProductByFitur} from '../../../actions/ProductAction';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardFitur = ({fitur, navigation, id, dispatch}) => {
  const toProductByFitur = (id, namaFitur) => {
    // ke Jersey Action
    dispatch(getProductByFitur(id, namaFitur));

    // navigate ke ListJersey
    navigation.navigate('ListProduct');
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toProductByFitur(id, fitur.namaFitur)}>
      <Image source={{uri: fitur.image}} style={styles.Fiturs} />
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
