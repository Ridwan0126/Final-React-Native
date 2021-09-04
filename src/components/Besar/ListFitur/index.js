import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardFitur} from '../../Kecil';

const ListFitur = ({
  getListFiturLoading,
  getListFiturResult,
  getListFiturError,
}) => {
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
        {/* {getListLigaResult ? (
        Object.keys(getListLigaResult).map((key) => {
          return <CardLiga navigation={navigation} liga={getListLigaResult[key]} key={key} id={key} />;
        })
      ) : getListLigaLoading ? (
        <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListLigaError ? (
        <Text>{getListLigaError}</Text>
      ) :(
        <Text>Data Kosong</Text>
      )} */}
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
});
