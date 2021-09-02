import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardKeranjang} from '../../Kecil';

const ListKeranjang = ({keranjangs}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {keranjangs.map(keranjang => {
          return <CardKeranjang keranjang={keranjang} key={keranjang.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
