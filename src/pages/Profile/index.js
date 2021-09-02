import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, StatusBar} from 'react-native';
import {dummyMenu, dummyProfile} from '../../data';
import {
  colors,
  fonts,
  heightMobileUI,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {ListMenu} from '../../components/Besar';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      menus: dummyMenu,
    };
  }

  render() {
    const {profile, menus} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0000E6" />
        <View style={styles.cont}>
          <Image source={profile.avatar} style={styles.foto} />
          <View style={styles.profile}>
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.deskripsi}>{profile.nomerHp}</Text>
            <Text style={styles.deskripsi}>
              {profile.alamat},{profile.kota}
            </Text>
          </View>
          <ListMenu menus={menus} navigation={this.props.navigation} />
        </View>
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
    height: responsiveHeight(680),
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveHeight(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: responsiveWidth(-75),
  },
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
  },
  deskripsi: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
  },
});
