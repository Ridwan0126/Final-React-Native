import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListPbb} from '../../components';
import {colors, fonts} from '../../utils';
import {Jarak} from '../../components';
import {connect} from 'react-redux';
import {getListPbb} from '../../actions/PbbAction';
import {getListFitur} from '../../actions/FiturAction';

class ListPbbs extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idFitur, keyword} = this.props;
      this.props.dispatch(getListFitur());
      this.props.dispatch(getListPbb(idFitur, keyword));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const {idFitur, keyword} = this.props;

    if (idFitur && prevProps.idFitur !== idFitur) {
      this.props.dispatch(getListPbb(idFitur, keyword));
    }

    if (keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getListPbb(idFitur, keyword));
    }
  }

  render() {
    const {navigation, namaFitur, keyword} = this.props;

    return (
      <View style={styles.page}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.pilihPbb}>
            {keyword ? (
              <Text style={styles.label}>
                Hasil : <Text style={styles.boldLabel}>{keyword}</Text>
              </Text>
            ) : (
              <Text style={styles.label}>
                Pilih <Text style={styles.boldLabel}>Pbb </Text>
                {namaFitur ? namaFitur : 'Yang Anda Inginkan'}
              </Text>
            )}
            <Jarak height={10} />
            <ListPbb navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  idFitur: state.PbbReducer.idFitur,
  namaFitur: state.PbbReducer.namaFitur,
  keyword: state.PbbReducer.keyword,
});

export default connect(mapStateToProps, null)(ListPbbs);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {
    marginTop: -30,
  },
  pilihLiga: {
    marginHorizontal: 30,
  },
  pilihPbb: {
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
});
