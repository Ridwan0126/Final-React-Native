import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  Home01,
  Home02,
  Profile01,
  Profile02,
  Shop01,
  Shop02,
  bi_shop,
  bi_shop1,
} from '../../../assets/Icons';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <Home02 /> : <Home01 />;
    }
    if (label === 'Product') {
      return isFocused ? <Shop01 /> : <Shop02 />;
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
    // flex: 1,
  },
  text: isFocused => ({
    color: isFocused ? 'white' : 'grey',
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  }),
});
