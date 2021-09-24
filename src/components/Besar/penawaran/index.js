import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Promo1, Promo2, Promo3, Promo4, Promo5} from '../../../assets';

const Gambar = props => {
  return (
    <View style={styles.shadow}>
      <Image source={props.gambar} style={styles.gmbr} />
    </View>
  );
};

const Himbauan = () => {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        <Gambar gambar={Promo2} />
        <Gambar gambar={Promo5} />
        <Gambar gambar={Promo3} />
        <Gambar gambar={Promo4} />
        <Gambar gambar={Promo1} />
      </View>
    </ScrollView>
  );
};

export default Himbauan;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  gmbr: {
    width: 290,
    height: 250,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});
