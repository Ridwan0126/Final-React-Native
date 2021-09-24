import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Home02, Home01, Profile02, Profile01} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <Home01 /> : <Home02 />;
    }
    if (label === 'Profile') {
      return isFocused ? <Profile01 /> : <Profile02 />;
    }

    return <Home02 />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 60,
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  }),
});
