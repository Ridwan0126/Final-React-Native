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
  Alert,
} from 'react-native';
import {Reg1, Reg2} from '../../assets';
import {colors, fonts, responsiveWidth} from '../../utils';
import {Inputan, Jarak, Pilihan, Tombol} from '../../components';
import {dummyProfile} from '../../data';
import {connect} from 'react-redux';
import {getProvinsiList, getKotaList} from '../../actions/RajaOngkirAction';
import {registerUser} from '../../actions/AuthAction';

class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alamat: '',
      kota: false,
      provinsi: false,
      profile: dummyProfile,
    };
  }
  componentDidMount() {
    this.props.dispatch(getProvinsiList());
  }

  componentDidUpdate(prevProps) {
    const {registerResult} = this.props;

    if (registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  ubahProvinsi = provinsi_id => {
    this.setState({
      provinsi: provinsi_id,
    });
    this.props.dispatch(getKotaList(provinsi_id));
  };

  onContinue = () => {
    // this.props.navigation.navigate('MainApp')
    const {kota, provinsi, alamat} = this.state;
    if (kota && provinsi && alamat) {
      const data = {
        nama: this.props.route.params.nama,
        email: this.props.route.params.email,
        nohp: this.props.route.params.nohp,
        alamat: alamat,
        provinsi: provinsi,
        kota: kota,
        status: 'user',
      };
      this.props.dispatch(registerUser(data, this.props.route.params.password));
      console.log('DATA REG 2', data);
      this.props.navigation.replace('MainApp');
    } else {
      Alert.alert('Error', 'Alamat, Kota dan Provinsi Wajib Untuk di Isi');
    }
  };

  render() {
    const {kota, provinsi, alamat} = this.state;
    const {getProvinsiResult, getKotaResult, registerLoading} = this.props;
    console.log('Parameter', this.props.route.params);
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
              <Reg2 />
              <Text style={styles.title}> Sign Up </Text>
            </View>
            <View style={styles.card}>
              <Inputan
                label="Alamat"
                textarea
                onChangeText={alamat => this.setState({alamat})}
                value={alamat}
              />
              <Pilihan
                label="Provinsi"
                datas={getProvinsiResult ? getProvinsiResult : []}
                selectedValue={provinsi}
                onValueChange={provinsi_id => this.ubahProvinsi(provinsi_id)}
              />
              <Pilihan
                label="Kota/Kab"
                datas={getKotaResult ? getKotaResult : []}
                selectedValue={kota}
                onValueChange={kota => this.setState({kota: kota})}
              />
              <Jarak height={20} />
              <Tombol
                tittle="Submit"
                type="textIcon"
                icon="submit"
                padding={15}
                fontSize={24}
                onPress={() => this.onContinue()}
                loading={registerLoading}
              />
            </View>
            <View style={styles.ilustrasi}>
              <View style={styles.wrapperCircle}>
                <View style={styles.circleDisabled}></View>
                <Jarak width={10} />
                <View style={styles.circlePrimary}></View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => ({
  getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult,
  getKotaResult: state.RajaOngkirReducer.getKotaResult,

  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(Register2);

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
