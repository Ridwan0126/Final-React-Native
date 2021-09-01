import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, responsiveHeight} from '../../utils';
import {Tombol} from '../../components';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    console.log('Param', this.props.route.params);
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Tombol
            icon="arrow-left"
            padding={7}
            onPrss={() => navigation.goBack()}
          />
        </View>
        <View style={styles.cont}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  cont: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(493),
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
  },
});
