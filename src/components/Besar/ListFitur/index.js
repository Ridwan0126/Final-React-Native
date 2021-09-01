import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardFitur} from '../../Kecil';

const ListFitur = ({fitur}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        {fitur.map(fitur => {
          return (
            <View key={fitur.id}>
              <CardFitur fitur={fitur} key={fitur.id} />
              <Text style={styles.text}>{fitur.nama}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ListFitur;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cont: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 23,
    // borderRadius: 15,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
});
