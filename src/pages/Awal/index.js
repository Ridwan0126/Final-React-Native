import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  BannerSlider,
  HeaderAwal,
  Jarak,
  ListFitur,
  Penawaran,
} from '../../components';
import {colors, fonts} from '../../utils';

import {getListFitur} from '../../actions/FiturAction';
import {limitPbb} from '../../actions/PbbAction';

class Awal extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListFitur());
      this.props.dispatch(limitPbb());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <HeaderAwal navigation={navigation} page="Home" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <BannerSlider />
          <ListFitur navigation={navigation} />
          <Text style={styles.label}>Penawaran Spesial</Text>
          <Penawaran />
          <Jarak height={85} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Awal);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  Fitur: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 9,
  },
  Product: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  container: {
    marginTop: -30,
  },
});
