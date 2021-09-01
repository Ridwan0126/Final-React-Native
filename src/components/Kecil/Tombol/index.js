import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Kembali, Keranjang} from '../../../assets/Icons';
import {colors} from '../../../utils';
import TextOnly from './TextOnly';

const Tombol = props => {
  const Icon = () => {
    if (icon === 'Keranjang') {
      return <Keranjang />;
    }
    return <Keranjang />;
  };

  const {onPress, icon, totalKeranjang, padding, type, tittle} = props;

  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (icon === 'arrow-left') {
    return <Kembali />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      {totalKeranjang && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalKeranjang}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: padding => ({padding: padding}),
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
  textNotif: {fontSize: 10, color: colors.white},
});
