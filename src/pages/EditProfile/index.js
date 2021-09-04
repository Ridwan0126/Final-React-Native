import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Inputan, Pilihan, Tombol} from '../../components';
import {dummyProfile} from '../../data';
import {
  colors,
  fonts,
  getData,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {getKotaList, getProvinsiList} from '../../actions/RajaOngkirAction';
import {Default} from '../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {updateProfile} from '../../actions/ProfileAction';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      Provinsi: false,
      Kota: false,
      uid: '',
      avatar: false,
      avatarForDB: '',
      avatarLama: '',
      updateAvatar: false,
    };
  }

  componentDidMount() {
    this.getUserData();
    this.props.dispatch(getProvinsiList());
  }

  componentDidUpdate(prevProps) {
    const {updateProfileResult} = this.props;

    if (
      updateProfileResult &&
      prevProps.updateProfileResult !== updateProfileResult
    ) {
      Alert.alert('Sukses', 'Update Profile Success');
      this.props.navigation.replace('MainApp');
    }
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        nohp: data.nohp,
        alamat: data.alamat,
        kota: data.kota,
        provinsi: data.provinsi,
        avatar: data.avatar,
        avatarLama: data.avatar,
      });

      this.props.dispatch(getKotaList(data.provinsi));
    });
  };

  ubahProvinsi = provinsi => {
    this.setState({
      provinsi: provinsi,
    });

    this.props.dispatch(getKotaList(provinsi));
  };

  getImage = () => {
    launchImageLibrary(
      {
        quality: 1,
        maxWidth: 500,
        maxHeight: 500,
        includeBase64: true,
        selectionLimit: 1,
        cameraType: 'front',
      },
      response => {
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Error', 'Maaf sepertinya anda tidak memilih fotonya');
        } else {
          const source = response.assets[0].uri;
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
            updateAvatar: true,
          });
        }
      },
    );
  };

  onSubmit = () => {
    const {nama, alamat, nohp, provinsi, kota} = this.state;
    if (nama && nohp && alamat && provinsi && kota) {
      //dispatch update
      this.props.dispatch(updateProfile(this.state));
    } else {
      Alert.alert('Error', 'Nama No. HP, Alamat, Kota, Provinsi harus diis');
    }
  };

  render() {
    const {
      dataKota,
      dataProvinsi,
      profile,
      nama,
      email,
      alamat,
      nohp,
      provinsi,
      kota,
      avatar,
    } = this.state;

    const {getKotaResult, getProvinsiResult, updateProfileLoading} = this.props;

    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputFoto}>
            <View style={styles.wrapperUpload}>
              <Image
                source={avatar ? {uri: avatar} : Default}
                style={styles.foto}
              />
            </View>
            <View style={styles.tombolChangePhoto}>
              <Tombol
                tittle="Change-Foto"
                type="text"
                padding={5}
                onPress={() => this.getImage()}
              />
            </View>
          </View>
          <Inputan
            label="Nama"
            value={nama}
            onChangeText={nama => this.setState({nama})}
          />
          <Inputan label="Email" value={email} disabled />
          <Inputan
            label="No.Hp"
            value={nohp}
            onChangeText={nohp => this.setState({nohp})}
            keyboardType="number-pad"
          />
          <Inputan
            label="Alamat"
            value={alamat}
            onChangeText={alamat => this.setState({alamat})}
            textarea
          />
          <Pilihan
            label="Provinsi"
            datas={getProvinsiResult ? getProvinsiResult : []}
            selectedValue={provinsi}
            onValueChange={provinsi => this.ubahProvinsi(provinsi)}
          />
          <Pilihan
            label="Kota/Kab"
            datas={getKotaResult ? getKotaResult : []}
            selectedValue={kota}
            onValueChange={kota => this.setState({kota: kota})}
          />
          <View style={styles.submit}>
            <Tombol
              loading={updateProfileLoading}
              tittle="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(20)}
              fontSize={20}
              onPress={() => this.onSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult,
  getKotaResult: state.RajaOngkirReducer.getKotaResult,

  updateProfileLoading: state.ProfileReducer.updateProfileLoading,
  updateProfileResult: state.ProfileReducer.updateProfileResult,
  updateProfileError: state.ProfileReducer.updateProfileError,
});

export default connect(mapStateToProps, null)(EditProfile);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  foto: {
    width: responsiveHeight(150),
    height: responsiveWidth(150),
    borderRadius: 100,
  },
  tombolChangePhoto: {
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
