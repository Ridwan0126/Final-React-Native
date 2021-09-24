import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {colors} from '../../../utils';
import {CardFitur} from '../../kecil';

const ListFitur = ({
  getListFiturLoading,
  getListFiturResult,
  getListFiturError,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {getListFiturResult ? (
        Object.keys(getListFiturResult).map(key => {
          return (
            <CardFitur
              navigation={navigation}
              fitur={getListFiturResult[key]}
              key={key}
              id={key}
            />
          );
        })
      ) : getListFiturLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListFiturError ? (
        <Text>{getListFiturError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
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
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
