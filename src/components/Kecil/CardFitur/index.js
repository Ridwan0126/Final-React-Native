import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardFitur = ({fitur, navigation, id}) => {
  const toJerseyByFitur = () => {
    // navigate ke ListJersey
    navigation.navigate('CariLokasi');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toJerseyByFitur(id, fitur.namaFitur)}>
      <Image source={{uri: fitur.image}} style={styles.logo} />
      <Text>{fitur.namaFitur}</Text>
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
    padding: 10,
    borderRadius: 15,
    marginLeft: 30,
  },
  logo: {
    width: responsiveWidth(37),
    height: responsiveHeight(50),
  },
});
