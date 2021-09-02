import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListFitur,
  ListProducts,
} from '../../components/Besar';
import {colors, fonts} from '../../utils';
import {dummyFitur, dummyProduct} from '../../data';
import {Jarak, Tombol} from '../../components';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fitur: dummyFitur,
      products: dummyProduct,
    };
  }

  render() {
    const {fitur, products} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.Fitur}>
            <ListFitur fitur={fitur} />
          </View>
          <View style={styles.Product}>
            <Text style={styles.label}>Product</Text>
            <ListProducts products={products} navigation={navigation} />
          </View>
          <Jarak height={85} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  Fitur: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  Product: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  container: {
    marginTop: -30,
  },
});
