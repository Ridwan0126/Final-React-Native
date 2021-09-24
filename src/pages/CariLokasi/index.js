import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListLokasi} from '../../components';
import {colors, fonts} from '../../utils';
import {Jarak} from '../../components';
import {connect} from 'react-redux';
import {getListFitur} from '../../actions/FiturAction';
import {limitPbb} from '../../actions/PbbAction';

class Home extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListFitur());
      this.props.dispatch(limitPbb());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.Head}>
            Silahkan Pilih Alamat Objek Pajak Anda
          </Text>
          <ListLokasi navigation={navigation} />
          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  Head: {
    padding: 20,
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    backgroundColor: colors.primary,
    color: colors.white,
  },
});
