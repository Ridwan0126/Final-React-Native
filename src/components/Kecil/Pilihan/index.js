import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {Picker} from '@react-native-picker/picker';

const Pilihan = ({
  selectedValue,
  onValueChange,
  label,
  datas,
  width,
  height,
  fontSize,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrap}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker(width, height, fontSize)}
          onValueChange={onValueChange}>
          <Picker.Item label="--Pilih--" value="" />
          {datas.map((item, idx) => {
            if (label == 'Provinsi') {
              return (
                <Picker.Item
                  key={item.province_id}
                  label={item.province}
                  value={item.province_id}
                />
              );
            } else if (label == 'Kota/Kab') {
              return (
                <Picker.Item
                  key={item.city_id}
                  label={item.type + ' ' + item.city_name}
                  value={item.city_id}
                />
              );
            } else {
              return <Picker.Item key={idx} label={item} value={item} />;
            }
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
  }),
  wrap: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
  },
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height ? height : responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10,
  }),
});
