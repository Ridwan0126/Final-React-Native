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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fitur: dummyFitur,
      products: dummyProduct,
    };
  }

  componentDidMount() {}

  render() {
    const {fitur, products} = this.state;
    const {navigation} = this.props;
    // console.log('Nav', this.props.navigation);
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          {/* <HeaderComponent /> */}
          <BannerSlider />
          <View style={styles.Fitur}>
            <Text style={styles.label}>Fitur</Text>
            <ListFitur fitur={fitur} />
          </View>
          <View style={styles.Product}>
            <Text style={styles.label}>Product</Text>
            <ListProducts products={products} navigation={navigation} />
            <Tombol tittle="Lihat Semua" type="text" padding={7} />
          </View>
          <Jarak height={85} />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

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
