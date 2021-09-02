import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Kanan, Kembali, Keranjang, Kembali2} from '../../../assets/Icons';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TextIcon = ({onPress, icon, padding, tittle, fontSize, disabled}) => {
  const Icon = () => {
    if (icon === 'Keranjang') {
      return <Keranjang />;
    } else if (icon === 'Kembali') {
      return <Kembali />;
    } else if (icon === 'KeranjangMasuk') {
      return <Keranjang />;
    } else if (icon === 'submit') {
      return <Kanan />;
    } else if (icon === 'KembaliHitam') {
      return <Kembali2 />;
    }

    return <Keranjang />;
  };

  return (
    <TouchableOpacity
      style={styles.container(disabled, padding)}
      onPress={onPress}>
      <Icon />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding, disabled) => ({
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }),
  title: fontSize => ({
    color: colors.white,
    fontSize: fontSize ? fontSize : 15,
    fontFamily: fonts.primary.bold,
  }),
});
