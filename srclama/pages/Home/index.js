import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListFitur,
  Himbauan,
} from '../../components/Besar';
import {colors, fonts} from '../../utils';
import {dummyFitur} from '../../data';
import {Jarak} from '../../components';
import {connect} from 'react-redux';
import {getListFitur} from '../../actions/FiturAction';
import {limitProduct} from '../../actions/ProductAction';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fitur: dummyFitur,
    };
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
    const {fitur} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="Home" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <BannerSlider />
          <View style={styles.Fitur}>
            <Text style={styles.label}>Fitur</Text>
            <ListFitur fitur={fitur} navigation={navigation} />
          </View>
          <Text style={styles.label}>Penawaran Spesial</Text>
          <Himbauan />
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
