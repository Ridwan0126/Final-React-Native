import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
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
import {Info} from '../../assets';

class ListProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyFitur: dummyFitur,
      dummyProduct: dummyProduct,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idProduct} = this.props;
      console.log('Id DI Didmount', idProduct);
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
    const {navigation} = this.props;
    const {dummyProduct} = this.state;
    console.log('API DI LIST PRODUCT', dummyProduct);
    return (
      <View style={styles.page}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <Jarak height={25} />
          <View>
            <TextInput
              placeholder="Cari Wilayah Objek Pajak Anda"
              style={{
                borderWidth: 0.4,
                marginTop: 18,
                marginHorizontal: 20,
                borderRadius: 10,
                marginBottom: 5,
              }}
            />
            <View style={styles.himbau}>
              <Image source={Info} width={10} height={10} />
              <Text style={{marginLeft: 9}}>
                Pembayaran dapat diproses hingga 1 hari kerja, Demi kenyamanan
                anda, Silahkan Bayar tagihan lebih awal.
              </Text>
            </View>
            <View>
              <View></View>
            </View>
          </View>
          <ListProducts navigation={navigation} Product={dummyProduct} />
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
  himbau: {
    margin: 8,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#D7ECFF',
    borderColor: '#0085FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
