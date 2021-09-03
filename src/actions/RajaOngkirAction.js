import axios from 'axios';
import {Alert} from 'react-native';
import {
  API_HEADER_RAJAONGKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
} from '../utils/constant';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';

export const getProvinsiList = () => {
  console.log('Provinsi');
  return dispatch => {
    dispatch({
      type: GET_PROVINSI,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      // url: 'https://api.rajaongkir.com/starter/province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('Respon Prov', response);
        if (response.status !== 200) {
          dispatch({
            type: GET_PROVINSI,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          console.log('Respon Prov berhasil', response.data.rajaongkir.results);
          dispatch({
            type: GET_PROVINSI,
            payload: {
              loading: false,
              data: response.data ? response.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_PROVINSI,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
        Alert.alert(error);
      });
  };
};

export const getKotaList = provinsi_id => {
  console.log('Kota');
  return dispatch => {
    dispatch({
      type: GET_KOTA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?province=' + provinsi_id,
      // url: 'https://api.rajaongkir.com/starter/province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('Respon Kota', response);
        if (response.status !== 200) {
          dispatch({
            type: GET_KOTA,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          console.log('Respon Kota berhasil', response.data.rajaongkir.results);
          dispatch({
            type: GET_KOTA,
            payload: {
              loading: false,
              data: response.data ? response.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_KOTA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
        Alert.alert(error);
      });
  };
};
