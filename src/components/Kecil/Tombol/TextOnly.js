import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextOnly = ({tittle, padding, fontSize, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container(padding, fontSize)}>
      <Text style={styles.text(fontSize)}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: (padding, fontSize) => ({
    padding: padding,
    backgroundColor: colors.primary,
    borderRadius: 5,
  }),
  fontSize: 20,
  text: fontSize => ({
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize ? fontSize : 13,
    fontFamily: fonts.primary.bold,
  }),
});
