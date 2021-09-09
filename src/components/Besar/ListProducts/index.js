import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {CardProduct} from '../../Kecil';
import {connect} from 'react-redux';
import {colors} from '../../../utils';

const ListProducts = ({
  // getListProductLoading,
  // getListProductResult,
  // getListProductError,
  getListContohLoading,
  getListContohResult,
  getListContohError,
  navigation,
}) => {
  console.log('DILISTSSSSSSSSSSSSSSSSSSSSS', getListContohResult);
  return (
    <View style={styles.container}>
      {/* {products.map(product => {
        return (
          <CardProduct
            key={product.id}
            products={product}
            navigation={navigation}
          />
        );
      })} */}
      {getListContohResult ? (
        Object.keys(getListContohResult).map(id => {
          console.log('asdasdasd', getListContohResult[id]);
          return (
            <CardProduct
              key={id}
              Product={getListContohResult[id]}
              navigation={navigation}
            />
          );
        })
      ) : getListContohLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListContohError ? (
        <Text>{getListContohError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  // getListProductLoading: state.ProductReducer.getListProductLoading,
  // getListProductResult: state.ProductReducer.getListProductResult,
  // getListProductError: state.ProductReducer.getListProductError,

  getListContohLoading: state.ContohReducer.getListContohLoading,
  getListContohResult: state.ContohReducer.getListContohResult,
  getListContohError: state.ContohReducer.getListContohError,
});

export default connect(mapStateToProps, null)(ListProducts);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
