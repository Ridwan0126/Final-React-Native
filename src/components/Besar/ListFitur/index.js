import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardFitur} from '../../Kecil';

const ListFitur = ({navigation, fitur}) => {
  console.log('Data Fitur', fitur);
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        {fitur.map(fitur => {
          return (
            <View key={fitur.id}>
              <CardFitur navigation={navigation} fitur={fitur} key={fitur.id} />
              <Text style={styles.text}>{fitur.nama}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  getListFiturLoading: state.FiturReducer.getListFiturLoading,
  getListFiturResult: state.FiturReducer.getListFiturResult,
  getListFiturError: state.FiturReducer.getListFiturError,
});

export default connect(mapStateToProps, null)(ListFitur);

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
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    padding: 23,
    // borderRadius: 15,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
