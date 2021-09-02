import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Logo} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
          <Text style={styles.textBlues}> Sign In </Text>
        </View>
        <View style={styles.cardLogin}>
          <Inputan label="Email" />
          <Inputan label="Password" secureTextEntry />
          <Jarak height={25} />
          <Tombol tittle="Login" type="text" padding={12} fontSize={19} />
        </View>
        <View style={styles.register}>
          <Text style={styles.textBlack}>
            Belum Punya Akun ?
            <Text
              style={styles.textBlue}
              onPress={() => this.props.navigation.navigate('Register1')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(40),
    marginBottom: 20,
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
  textBlack: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: 'black',
    paddingLeft: 5,
  },
  textBlues: {
    marginTop: 20,
    fontSize: 30,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
});
