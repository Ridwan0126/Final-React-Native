import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {responsiveWidth} from '../../../utils';

const ListLokasi = ({navigation}) => {
  const Tombols = props => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.kota2}>{props.namaKota}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Daerah Khusus Ibu Kota Jakarta</Text>
        <Tombols namaKota="DKI Jakarta" />
      </View>
      <View>
        <Text style={styles.title}>Provinsi Banten</Text>
        <Tombols namaKota="Kota Cilegon" />
      </View>
      <View>
        <Text style={styles.title}>Provinsi Jawa Barat</Text>
        <Tombols namaKota="Kab. Karawang" />
        <Tombols namaKota="Kab. Subang" />
        <Tombols namaKota="Kab. Cirebon" />
        <Tombols namaKota="Kota Cimahi" />
        <Tombols namaKota="Kota Depok" />
        <Tombols namaKota="Kab. Purwakarta" />
        <Tombols namaKota="Kota Banjar" />
      </View>
      <View>
        <Text style={styles.title}>Provinsi Jawa Timur</Text>
        <Tombols namaKota="Kab. Mojokerto" />
        <Tombols namaKota="Kab. Sidoarjo" />
      </View>
      <View>
        <Text style={styles.title}>Provinsi Sumatera Utara</Text>
        <Tombols namaKota="Kota Tebingtinggi" />
        <Tombols namaKota="Kota Binjai" />
        <Tombols namaKota="Kab. Labuhanbatu Selatan" />
        <Tombols namaKota="Kab. Samosir" />
        <Tombols namaKota="Kota Pematang Siantar" />
        <Tombols namaKota="Kab. Serdang Bedagai" />
        <Tombols namaKota="Kab. Deli Serdang" />
        <Tombols namaKota="Kab. Tapanuli Uatara" />
        <Tombols namaKota="kab. Dairi" />
        <Tombols namaKota="Kab. Pakpak Bharat" />
        <Tombols namaKota="kab. Toba Samosir" />
        <Tombols namaKota="kab. Karo" />
        <Tombols namaKota="Kab. Padang Lawas Utara" />
        <Tombols namaKota="kab. Labuhanbatu Utara" />
        <Tombols namaKota="Kab. Taoanuli Selatan" />
        <Tombols namaKota="Kab. Batubara" />
        <Tombols namaKota="Kab. Mandailing NATAL" />
        <Tombols namaKota="Kab. Langkat" />
        <Tombols namaKota="Kota Padang Sidempuan" />
        <Tombols namaKota="Kota Sibolga" />
        <Tombols namaKota="Kab. Labuhanbatu" />
        <Tombols namaKota="Kab. Asahan" />
        <Tombols namaKota="Kota Medan" />
      </View>
      <View>
        <Text style={styles.title}>Provinsi Riau</Text>
        <Tombols namaKota="Kab. Bengkalis" />
        <Tombols namaKota="Kab. Indra Giri Hilir" />
        <Tombols namaKota="Kab. Kampar" />
        <Tombols namaKota="Kab.Kuantan Singingi" />
        <Tombols namaKota="Kab. Rokan Hulu" />
        <Tombols namaKota="Kab. Siak" />
        <Tombols namaKota="Kota Pekanbaru" />
      </View>
      <View>
        <Text style={styles.title}>Provinsi Kepulauan Riau</Text>
        <Tombols namaKota="Kab. Natuna" />
        <Tombols namaKota="Kota Batam" />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(ListLokasi);

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    paddingVertical: 15,
    paddingLeft: 10,
    backgroundColor: '#E9E9E9',
    width: responsiveWidth(415),
  },
  kota1: {
    paddingVertical: 6,
  },
  kota2: {
    paddingVertical: 12,
    backgroundColor: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
});
