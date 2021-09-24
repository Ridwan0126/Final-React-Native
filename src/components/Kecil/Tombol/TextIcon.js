import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Keranjang, IconKeranjang, Kembali, Kanan} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TextIcon = ({icon, padding, onPress, title, fontSize, disabled}) => {
  const Icon = () => {
    if (icon === 'keranjang') {
      return <Keranjang />;
    } else if (icon === 'arrow-left') {
      return <Kembali />;
    } else if (icon === 'keranjang-putih') {
      return <Keranjang />;
    } else if (icon === 'submit') {
      return <Kanan />;
    }

    return <IconKeranjang />;
  };

  return (
    <TouchableOpacity
      style={styles.container(padding, disabled)}
      onPress={onPress}>
      <Icon />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding, disabled) => ({
    backgroundColor: disabled ? colors.border : colors.primary,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (fontSize) => ({
    color: colors.white,
    fontSize: fontSize ? fontSize : 15,
    fontFamily: fonts.primary.bold,
  }),
});
