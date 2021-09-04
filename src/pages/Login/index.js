import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Logo} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {loginUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const {email, password} = this.state;
    if (email && password) {
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert('Error', 'Guys!! Udah Bener Belom? Benerin Dulu Dong!');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {email, password} = this.state;
    const {loginLoading} = this.props;

    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
          <Text style={styles.textBlues}> Sign In </Text>
        </View>
        <View style={styles.cardLogin}>
          <Inputan
            label="Email"
            value={email}
            onChangeText={email => this.setState({email})}
          />
          <Inputan
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <Jarak height={25} />
          <Tombol
            tittle="Login"
            type="text"
            padding={12}
            fontSize={19}
            loading={loginLoading}
            onPress={() => this.login()}
          />
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

const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateToProps, null)(Login);

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
