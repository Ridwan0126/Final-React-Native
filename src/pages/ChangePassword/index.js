import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Inputan, Tombol} from '../../components';
import {colors, responsiveHeight} from '../../utils';

export default class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View>
          <Inputan label="Password Lama" secureTextEntry />
          <Inputan label="Password Baru" secureTextEntry />
          <Inputan label="Confirm Password" secureTextEntry />
        </View>

        <View style={styles.submit}>
          <Tombol
            tittle="Submit"
            type="textIcon"
            icon="submit"
            padding={responsiveHeight(20)}
            fontSize={20}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },

  submit: {
    marginVertical: 30,
  },
});
