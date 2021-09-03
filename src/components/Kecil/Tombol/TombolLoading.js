import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Kanan, Kembali, Keranjang, Kembali2} from '../../../assets/Icons';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TombolLoading = ({
  onPress,
  icon,
  padding,
  tittle,
  fontSize,
  disabled,
}) => {
  return (
    <TouchableOpacity style={styles.container(disabled, padding)}>
      <ActivityIndicator size="small" color="#FFFF" />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>Loading . . ..</Text>
    </TouchableOpacity>
  );
};

export default TombolLoading;

const styles = StyleSheet.create({
  container: (padding, disabled) => ({
    backgroundColor: colors.primary,
    padding: padding,
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
