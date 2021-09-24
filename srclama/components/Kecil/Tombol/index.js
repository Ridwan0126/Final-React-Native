import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Kanan, Kembali, Keranjang, Kembali2} from '../../../assets/Icons';
import {colors} from '../../../utils';
import TextIcon from './TextIcon';
import TextOnly from './TextOnly';
import TombolLoading from './TombolLoading';

const Tombol = props => {
  const Icon = () => {
    if (icon === 'Keranjang') {
      return <Keranjang />;
    } else if (icon === 'Kembali') {
      return <Kembali />;
    } else if (icon === 'KembaliHitam') {
      return <Kembali2 />;
    }
    return <Keranjang />;
  };

  const {loading, onPress, icon, totalKeranjang, padding, type, tittle} = props;

  if (loading) {
    return <TombolLoading {...props} />;
  }

  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} />;
  } else if (icon === 'submit') {
    return <Kanan />;
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
