import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Search} from '../../../assets/Icons';
import {colors, responsiveHeight, fonts} from '../../../utils';
import {Jarak, Tombol} from '../../Kecil';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.WrapHeader}>
          <View style={styles.Cari}>
            <Search />
            <TextInput placeholder="Search Product" style={styles.input} />
          </View>
          <Jarak width={10} />
          <Tombol icon="Keranjang" totalKeranjang={2} padding={10} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {backgroundColor: colors.primary, height: responsiveHeight(125)},
  input: {fontSize: 16, fontFamily: fonts.primary.regular},
  Cari: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    // borderRadius: 5,
    paddingLeft: 6,
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  WrapHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
});
