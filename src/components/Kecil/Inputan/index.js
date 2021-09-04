import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Inputan = ({
  value,
  textarea,
  textareas,
  width,
  label,
  height,
  fontSize,
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  disabled,
}) => {
  if (textarea) {
    return (
      <View>
        <Text>{label} :</Text>
        <TextInput
          style={styles.inputTextArea(fontSize)}
          multiline={true}
          numberOfLines={3}
          value={value}
          onChangeText={onChangeText}
          editable={disabled ? false : true}
        />
      </View>
    );
  }
  if (textareas) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label} :</Text>
        <TextInput
          value={value}
          style={styles.inputsss(width, height, fontSize)}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          editable={disabled ? false : true}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        style={styles.input(width, height, fontSize)}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        editable={disabled ? false : true}
      />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
  }),
  input: (fontSize, width, height) => ({
    // width: 100,
    // height: 30,
    fontSize: fontSize ? fontSize : 18,
    width: width,
    height: height,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  inputsss: (fontSize, width, height) => ({
    width: 100,
    height: 30,
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  inputTextArea: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  }),
});
