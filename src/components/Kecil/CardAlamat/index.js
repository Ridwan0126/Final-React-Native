import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardAlamat = ({profile}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alamat :</Text>
      <Text style={styles.alamat}>{profile.alamat}</Text>
      <Text style={styles.alamat}>Kota/Kab : {profile.kota}</Text>
      <Text style={styles.alamat}>Provinsi : {profile.provinsi}</Text>
      <TouchableOpacity>
        <Text style={styles.ubahAlamat}>Ubah Alamat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAlamat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    marginBottom: 5,
  },
  alamat: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
  ubahAlamat: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    color: colors.primary,
    textAlign: 'right',
  },
});
