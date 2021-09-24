import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {colors} from '../../../utils';
import {CardPbb} from '../../kecil';

const ListPbbs = ({
  getListPbbLoading,
  getListPbbResult,
  getListPbbError,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {getListPbbResult ? (
        Object.keys(getListPbbResult).map(key => {
          return (
            <CardPbb
              key={key}
              pbb={getListPbbResult[key]}
              navigation={navigation}
            />
          );
        })
      ) : getListPbbLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListPbbError ? (
        <Text>{getListPbbError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  getListPbbLoading: state.PbbReducer.getListPbbLoading,
  getListPbbResult: state.PbbReducer.getListPbbResult,
  getListPbbError: state.PbbReducer.getListPbbError,
});

export default connect(mapStateToProps, null)(ListPbbs);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
