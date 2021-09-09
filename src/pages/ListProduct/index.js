import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListFitur,
  ListProducts,
} from '../../components/Besar';
import {colors, fonts} from '../../utils';
import {dummyFitur, dummyProduct} from '../../data';
import {Jarak, Tombol} from '../../components';
import {connect} from 'react-redux';
import {getListFitur} from '../../actions/FiturAction';
import {getListProduct} from '../../actions/ProductAction';
import {GetContoh} from '../../actions/RajaOngkirAction';

class ListProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idProduct, keyword} = this.props;
      console.log('Id DI Didmount', idProduct);
      this.props.dispatch(getListFitur());
      this.props.dispatch(getListProduct(idProduct, keyword));
      this.props.dispatch(GetContoh());
    });
  }

  componentDidUpdate(prevProps) {
    const {idProduct, keyword} = this.props;

    if (idProduct && prevProps.idProduct !== idProduct) {
      this.props.dispatch(getListProduct(idProduct, keyword));
    }

    if (keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getListProduct(idProduct, keyword));
    }
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {
      navigation,
      namaFitur,
      keyword,
      getListContohLoading,
      getListContohResult,
      getListContohError,
    } = this.props;
    console.log('API DI LIST PRODUCT', getListContohResult);
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="ListProduct" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.Fitur}>
            <ListFitur navigation={navigation} />
          </View>
          <View>
            {/* {getListContohResult ? (
              Object.keys(getListContohResult).map(id => {
                return <Text key={id}>{getListContohResult[id].email}</Text>;
              })
            ) : getListContohLoading ? (
              <View style={styles.loading}>
                <ActivityIndicator color={colors.primary} />
              </View>
            ) : getListContohError ? (
              <Text>{getListContohError}</Text>
            ) : (
              <Text>Data Kosong</Text>
            )} */}
          </View>
          <View style={styles.Product}>
            {/* {keyword ? (
              <Text style={styles.label}>
                Cari : <Text style={styles.boldLabel}>{keyword}</Text>
              </Text>
            ) : (
              <Text style={styles.label}>
                <Text style={styles.boldLabel}>Product </Text>
                {namaFitur ? namaFitur : 'Yang Anda Mau'}
              </Text>
            )} */}
            <ListProducts navigation={navigation} />
          </View>
          <Jarak height={85} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  idProduct: state.ProductReducer.idProduct,
  namaFitur: state.ProductReducer.namaFitur,
  keyword: state.ProductReducer.keyword,

  getListContohLoading: state.ContohReducer.getListContohLoading,
  getListContohResult: state.ContohReducer.getListContohResult,
  getListContohError: state.ContohReducer.getListContohError,
});

export default connect(mapStateToProps, null)(ListProduct);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  Fitur: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  Product: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  container: {
    marginTop: -30,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
