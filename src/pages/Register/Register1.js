import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Reg1} from '../../assets';
import {colors, fonts, responsiveWidth} from '../../utils';
import {Inputan, Jarak, Tombol} from '../../components';

export default class Register1 extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <Tombol
                icon="KembaliHitam"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <View style={styles.ilustrasi}>
              <Reg1 />
              <Text style={styles.title}> Sign Up </Text>
            </View>
            <View style={styles.card}>
              <Inputan label="Nama" />
              <Inputan label="Email" />
              <Inputan label="No. Handphone" keyboardType="number-pad" />
              <Inputan label="Password" secureTextEntry />
              <Jarak height={20} />
              <Tombol
                tittle="Continue"
                type="textIcon"
                icon="submit"
                padding={15}
                fontSize={24}
                onPress={() => this.props.navigation.navigate('Register2')}
              />
            </View>
            <View style={styles.ilustrasi}>
              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary}></View>
                <Jarak width={10} />
                <View style={styles.circleDisabled}></View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  ilustrasi: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
    marginTop: 15,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  card: {
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
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  btnBack: {
    marginLeft: 20,
    position: 'absolute',
  },
});
