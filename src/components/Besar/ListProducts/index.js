import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardProduct} from '../../Kecil';

const ListProducts = ({products, navigation}) => {
  return (
    <View style={styles.container}>
      {products.map(product => {
        return (
          <CardProduct
            key={product.id}
            products={product}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
