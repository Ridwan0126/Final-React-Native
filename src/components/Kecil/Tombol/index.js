import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Keranjang} from '../../../assets/Icons';
import {colors} from '../../../utils';

const Tombol = ({icon, totalKeranjang, padding}) => {
  const Icon = () => {
    if (icon === 'Keranjang') {
      return <Keranjang />;
    }
    return <Keranjang />;
  };
  return (
    <TouchableOpacity style={styles.container(padding)}>
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
