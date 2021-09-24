import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardPbb = ({pbb, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>Nama</Text>
        <Text style={styles.subTitle}>{pbb.nama} </Text>
        <Text style={styles.title}>NOP</Text>
        <Text style={styles.subTitle}>{pbb.nop} </Text>
        <Text style={styles.title}>Alamat</Text>
        <Text style={styles.subTitle}>{pbb.alamat} </Text>
      </TouchableOpacity>

      <Tombol
        type="text"
        title="Detail"
        padding={7}
        onPress={() => navigation.navigate('PbbDetail', {pbb})}
      />
    </View>
  );
};

export default CardPbb;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(350),
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  gambar: {
    width: 124,
    height: 124,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  title: {
    margin: 5,
    backgroundColor: '#E9E9E9',
    padding: 2,
  },
  subTitle: {
    fontFamily: fonts.primary.regular,
    textAlign: 'right',
    margin: 5,
  },
});
