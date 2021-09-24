import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {ListHistory} from '../../components';
import {dummyPesanans} from '../../data';
import {colors} from '../../utils';

const History = ({
  getListContohLoading,
  getListContohResult,
  getListContohError,
  navigation,
}) => {
  // class History extends Component {
  // render() {
  //   const {
  //     getListContohLoading,
  //     getListContohResult,
  //     getListContohError,
  //     navigation,
  //   } = this.props;
  //   // const {pesanans} = this.state;
  console.log('DATA KERANJANG ===>', getListContohResult);
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {getListContohResult ? (
          getListContohResult.map(item => {
            console.log('ITEM API DI KERANJANG', item);
            return <ListHistory pesanans={item} />;
          })
        ) : getListContohLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListContohError ? (
          <Text>{getListContohError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
      </ScrollView>
    </View>
  );
};
// }
// };

const mapStateToProps = state => ({
  getListContohLoading: state.ContohReducer.getListContohLoading,
  getListContohResult: state.ContohReducer.getListContohResult,
  getListContohError: state.ContohReducer.getListContohError,
});

export default connect(mapStateToProps, null)(History);

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
