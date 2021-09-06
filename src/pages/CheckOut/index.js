import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {CardAlamat, Jarak, Pilihan, Tombol} from '../../components';
import {
  colors,
  fonts,
  getData,
  numberWithCommas,
  responsiveHeight,
} from '../../utils';
import {dummyPesanans, dummyProfile} from '../../data';
import {connect} from 'react-redux';
import {getKotaDetail, postOngkir} from '../../actions/RajaOngkirAction';
import {couriers} from '../../data';

class ChectOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: false,
      pesanan: dummyPesanans[0],
      // ekspedisi: [],
      totalHarga: this.props.route.params.totalHarga,
      totalBerat: this.props.route.params.totalBerat,
      alamat: '',
      date: new Date().getTime(),
      ekspedisi: couriers,
      ekspedisiSelected: false,
      ongkir: 0,
      estimasi: '',
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;

      if (data) {
        this.setState({
          profile: data,
          alamat: data.alamat,
        });

        this.props.dispatch(getKotaDetail(data.kota));
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  componentDidUpdate(prevProps) {
    const {getKotaDetailResult, ongkirResult, snapTransactionsResult} =
      this.props;

    if (
      getKotaDetailResult &&
      prevProps.getKotaDetailResult !== getKotaDetailResult
    ) {
      this.setState({
        provinsi: getKotaDetailResult.province,
        kota: getKotaDetailResult.type + ' ' + getKotaDetailResult.city_name,
      });
    }

    if (ongkirResult && prevProps.ongkirResult !== ongkirResult) {
      this.setState({
        ongkir: ongkirResult.cost[0].value,
        estimasi: ongkirResult.cost[0].etd,
      });
    }

    // if(snapTransactionsResult && prevProps.snapTransactionsResult !== snapTransactionsResult) {

    //   const params = {
    //     url: snapTransactionsResult.redirect_url,
    //     ongkir: this.state.ongkir,
    //     estimasi: this.state.estimasi,
    //     order_id: "TEST-"+this.state.date+"-"+this.state.profile.uid
    //   }

    // this.props.navigation.navigate('Midtrans', params);

    // }
  }

  ubahEkspedisi = ekspedisiSelected => {
    if (ekspedisiSelected) {
      this.setState({
        ekspedisiSelected: ekspedisiSelected,
      });

      this.props.dispatch(postOngkir(this.state, ekspedisiSelected));
    }
  };

  // Bayar = () => {

  //   const { totalHarga, ongkir, profile, date } = this.state

  //   const data = {
  //     transaction_details: {
  //       order_id: "TEST-"+date+"-"+profile.uid,
  //       gross_amount: parseInt(totalHarga+ongkir)
  //     },
  //     credit_card: {
  //       secure: true
  //     },
  //     customer_details: {
  //       first_name: profile.nama,
  //       email: profile.email,
  //       phone: profile.nohp
  //     }
  //   }

  //   if(!ongkir == 0) {

  //     this.props.dispatch(snapTransactions(data))

  //   }else {
  //     Alert.alert('Error', "Silahkan Ongkir Dipilih Terlebih Dahulu")
  //   }

  // }

  render() {
    const {
      profile,
      ekspedisi,
      totalBerat,
      totalHarga,
      alamat,
      kota,
      provinsi,
      ekspedisiSelected,
      ongkir,
      estimasi,
    } = this.state;
    const {navigation} = this.props;
    console.log('Profile', profile);
    return (
      <View style={styles.page}>
        <View style={styles.isi}>
          <Text style={styles.textBold}>Apakah Alamat Ini Benar? </Text>
          <CardAlamat
            navigation={navigation}
            alamat={alamat}
            provinsi={provinsi}
            kota={kota}
          />
          <View style={styles.totalHarga}>
            <Text style={styles.textBolds}>Total Harga :</Text>
            <Text style={styles.textBolds}>
              Rp. {numberWithCommas(totalHarga)}
            </Text>
          </View>
          <Pilihan
            label="Pilih Ekspedisi"
            datas={ekspedisi}
            selectedValue={ekspedisiSelected}
            onValueChange={ekspedisiSelected =>
              this.ubahEkspedisi(ekspedisiSelected)
            }
          />
          <Jarak height={10} />
          <Text style={styles.textBold}>Biaya Ongkir</Text>
          <View style={styles.ongkir}>
            <Text style={styles.text}>
              Untuk Berat :{numberWithCommas(totalBerat)} kg
            </Text>
            <Text style={styles.textBold}>Rp. {numberWithCommas(ongkir)} </Text>
          </View>

          <View style={styles.ongkir}>
            <Text style={styles.text}>Estimasi Waktu</Text>
            <Text style={styles.textBold}>{estimasi} hari</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(totalHarga + ongkir)}
            </Text>
          </View>
          <Tombol
            tittle="Bayar"
            type="textIcon"
            fontSize={18}
            padding={responsiveHeight(15)}
            icon="Keranjang"
            onPress={() => this.props.navigation.navigate('CheckOut')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getKotaDetailLoading: state.RajaOngkirReducer.getKotaDetailLoading,
  getKotaDetailResult: state.RajaOngkirReducer.getKotaDetailResult,
  getKotaDetailError: state.RajaOngkirReducer.getKotaDetailError,
  ongkirResult: state.RajaOngkirReducer.ongkirResult,
  // snapTransactionsResult: state.PaymentReducer.snapTransactionsResult,
  // snapTransactionsLoading: state.PaymentReducer.snapTransactionsLoading
});

export default connect(mapStateToProps, null)(ChectOut);

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 25,
    justifyContent: 'space-between',
  },
  isi: {
    paddingHorizontal: 30,
  },
  textBold: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  textBolds: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
  },
  ongkir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 11,
    paddingBottom: 30,
  },
});
