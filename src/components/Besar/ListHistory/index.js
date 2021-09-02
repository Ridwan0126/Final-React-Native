import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardHistory} from '../../Kecil';

const ListHistory = ({pesanans}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {pesanans.map(pesanan => {
          return <CardHistory pesanan={pesanan} key={pesanan.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListHistory;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
  },
});
