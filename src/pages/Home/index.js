import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListFitur,
  ListProducts,
} from '../../components/Besar';
import {colors, fonts} from '../../utils';
import {dummyProduct} from '../../data';
import {Jarak, Tombol} from '../../components';
import {connect} from 'react-redux';
import {getListFitur} from '../../actions/FiturAction';
import {limitProduct} from '../../actions/ProductAction';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListFitur());
      this.props.dispatch(limitProduct());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    // console.log('Nav', this.props.navigation);
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="Home" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          {/* <HeaderComponent /> */}
          <BannerSlider />
          <View style={styles.Fitur}>
            <Text style={styles.label}>Fitur</Text>
            <ListFitur navigation={navigation} />
          </View>
          <View style={styles.Product}>
            <Text style={styles.label}>Product</Text>
            <ListProducts navigation={navigation} />
            <Tombol tittle="Lihat Semua" type="text" padding={7} />
          </View>
          <Jarak height={85} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  Fitur: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  Product: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  container: {
    marginTop: -30,
  },
});
