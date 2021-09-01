import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextOnly = ({tittle, padding, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(padding)}>
      <Text style={styles.text}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: padding => ({
    padding: padding,
    backgroundColor: colors.primary,
    borderRadius: 5,
  }),
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.primary.bold,
  },
});
