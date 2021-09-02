import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PanahKanan} from '../../../assets';
import {colors, fonts, responsiveHeight} from '../../../utils';

const CardMenu = ({menu, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(menu.halaman)}>
      <View style={styles.menu}>
        {menu.gambar}
        <Text style={styles.text}>{menu.nama}</Text>
      </View>
      <PanahKanan />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: responsiveHeight(15),
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    marginLeft: 20,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
