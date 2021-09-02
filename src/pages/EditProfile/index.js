import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {Inputan, Pilihan, Tombol} from '../../components';
import {dummyProfile} from '../../data';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyProfile,
    };
  }

  render() {
    const {dataKota, dataProvinsi, profile} = this.state;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputFoto}>
            <View style={styles.wrapperUpload}>
              <Image source={profile.avatar} style={styles.foto} />
            </View>
            <View style={styles.tombolChangePhoto}>
              <Tombol tittle="Change-Foto" type="text" padding={5} />
            </View>
          </View>
          <Inputan label="Nama" value={profile.nama} />
          <Inputan label="Email" value={profile.email} />
          <Inputan label="No.Hp" value={profile.nomerHp} />
          <Inputan label="Alamat" value={profile.alamat} textarea />
          <Pilihan label="Provinsi" datas={dataProvinsi} />
          <Pilihan label="Kota/Kab" datas={dataKota} />
          <View style={styles.submit}>
            <Tombol
              tittle="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(20)}
              fontSize={20}
            />
          </View>
        </ScrollView>
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
    borderRadius: 50,
  },
  tombolChangePhoto: {
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
