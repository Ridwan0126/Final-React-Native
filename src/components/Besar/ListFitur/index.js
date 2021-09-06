import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardFitur} from '../../Kecil';
import {colors} from '../../../utils';

const ListFitur = ({
  getListFiturLoading,
  getListFiturResult,
  getListFiturError,
  navigation,
}) => {
  console.log('Data Fitur', getListFiturResult);
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        {/* {fitur.map(fitur => {
          return (
            <View key={fitur.id}>
              <CardFitur fitur={fitur} key={fitur.id} />
              <Text style={styles.text}>{fitur.nama}</Text>
            </View>
          );
        })} */}
        {getListFiturResult ? (
          Object.keys(getListFiturResult).map(key => {
            // console.log('key',key);
            return (
              <View>
                <CardFitur
                  navigation={navigation}
                  fitur={getListFiturResult[key]}
                  id={key}
                  key={key}
                />
                <Text style={styles.text}>
                  {getListFiturResult[key].namaFitur}
                </Text>
              </View>
            );
          })
        ) : getListFiturLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : // )
        getListFiturError ? (
          <Text>{getListFiturError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
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
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
