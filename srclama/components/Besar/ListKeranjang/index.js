import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CardKeranjang} from '../../Kecil';
import {colors} from '../../../utils';

const ListKeranjang = ({
  getListKeranjangLoading,
  getListKeranjangResult,
  getListKeranjangError,
}) => {
  console.log('Keranjang Result', getListKeranjangResult);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListKeranjangResult ? (
          Object.keys(getListKeranjangResult.pesanans).map(key => {
            return (
              <CardKeranjang
                keranjang={getListKeranjangResult.pesanans[key]}
                keranjangUtama={getListKeranjangResult}
                key={key}
                id={key}
              />
            );
          })
        ) : getListKeranjangLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListKeranjangError ? (
          <Text>{getListKeranjangError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  ading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
