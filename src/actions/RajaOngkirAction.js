import axios from 'axios';
import {Alert} from 'react-native';
import {
  API_HEADER_RAJAONGKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
  API_HEADER_RAJAONGKIR_COST,
  ORIGIN_CITY,
} from '../utils/constant';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';
export const GET_KOTA_DETAIL = 'GET_KOTA_DETAIL';
export const POST_ONGKIR = 'POST_ONGKIR';
export const GET_CONTOH = 'GET_CONTOH';

export const GetContoh = () => {
  console.log('Contoh ===>');
  return dispatch => {
    dispatchLoading(dispatch, GET_CONTOH);

    axios('http://192.168.43.33:8080/data/api/Customer')
      .then(response => {
        console.log('Respon API JAVA 01', response);
        if (response.status !== 200) {
          dispatchError(dispatch, GET_CONTOH, response);
        } else {
          console.log('Respon CONTOH DARI API 02', response.data);
          dispatchSuccess(
            dispatch,
            GET_CONTOH,
            response.data ? response.data : [],
          );
        }
      })
      .catch(error => {
        console.log('asasasasasasasasasasas', error.message);
      });
  };
};

export const getProvinsiList = () => {
  console.log('Provinsi');
  return dispatch => {
    dispatchLoading(dispatch, GET_PROVINSI);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('Respon Prov', response);
        if (response.status !== 200) {
          dispatchError(dispatch, GET_PROVINSI, response);
        } else {
          console.log('Respon Prov berhasil', response.data.rajaongkir.results);
          dispatchSuccess(
            dispatch,
            GET_PROVINSI,
            response.data ? response.data.rajaongkir.results : [],
          );
        }
      })
      .catch(error => {
        dispatchError(dispatch, GET_PROVINSI, error);
        Alert.alert(error);
      });
  };
};

export const getKotaList = provinsi_id => {
  console.log('Kota');
  return dispatch => {
    dispatchLoading(dispatch, GET_KOTA);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?province=' + provinsi_id,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('Respon Kota', response);
        if (response.status !== 200) {
          dispatchError(dispatch, GET_KOTA, response);
        } else {
          console.log('Respon Kota berhasil', response.data.rajaongkir.results);
          dispatchSuccess(
            dispatch,
            GET_KOTA,
            response.data ? response.data.rajaongkir.results : [],
          );
        }
      })
      .catch(error => {
        dispatchError(dispatch, GET_KOTA, error);
        Alert.alert(error);
      });
  };
};

export const getKotaDetail = kota_id => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, GET_KOTA_DETAIL);

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?id=' + kota_id,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        if (response.status !== 200) {
          // ERROR
          dispatchError(dispatch, GET_KOTA_DETAIL, response);
        } else {
          //SUKSES
          dispatchSuccess(
            dispatch,
            GET_KOTA_DETAIL,
            response.data ? response.data.rajaongkir.results : [],
          );
        }
      })
      .catch(error => {
        // ERROR
        dispatchError(dispatch, GET_KOTA_DETAIL, error);

        alert(error);
      });
  };
};
