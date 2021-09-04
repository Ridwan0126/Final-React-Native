import axios from 'axios';
import {Alert} from 'react-native';
import {
  API_HEADER_RAJAONGKIR,
  API_RAJAONGKIR,
  API_TIMEOUT,
} from '../utils/constant';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';

export const getProvinsiList = () => {
  console.log('Provinsi');
  return dispatch => {
    dispatchLoading(dispatch, GET_PROVINSI);

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
          dispatchError(dispatch, GET_PROVINSI, response);
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
      // url: 'https://api.rajaongkir.com/starter/province',
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

// export const getKotaDetail = (kota_id) => {
//   return (dispatch) => {
//     // LOADING
//     dispatchLoading(dispatch, GET_KOTA_DETAIL);

//     axios({
//       method: 'get',
//       url: API_RAJAONGKIR + 'city?id=' + kota_id,
//       timeout: API_TIMEOUT,
//       headers: API_HEADER_RAJAONGKIR,
//     })
//       .then((response) => {
//         if (response.status !== 200) {
//           // ERROR
//           dispatchError(dispatch, GET_KOTA_DETAIL, response);
//         } else {
//           //SUKSES
//           dispatchSuccess(
//             dispatch,
//             GET_KOTA_DETAIL,
//             response.data ? response.data.rajaongkir.results : [],
//           );
//         }
//       })
//       .catch((error) => {
//         // ERROR
//         dispatchError(dispatch, GET_KOTA_DETAIL, error);

//         alert(error);
//       });
//   };
// };

// export const postOngkir = (data, ekspedisi) => {
//   return (dispatch) => {
//     dispatchLoading(dispatch, POST_ONGKIR);

//     const formData = new URLSearchParams();
//     formData.append('origin', ORIGIN_CITY);

//     // --> destination data.profile.kota
//     formData.append('destination', data.profile.kota);

//     // --> berat => data.totalBerat
//     formData.append('weight', data.totalBerat < 1 ? 1000 : data.totalBerat*1000);

//     // --> courier => ekspedisi.kurir
//     formData.append('courier', ekspedisi.kurir);

//     axios({
//       method: 'POST',
//       url: API_RAJAONGKIR+'cost',
//       timeout: API_TIMEOUT,
//       headers: API_HEADER_RAJAONGKIR_COST,
//       data: formData
//     })
//       .then((response) => {
//         if (response.status !== 200) {
//           // ERROR
//           dispatchError(dispatch, POST_ONGKIR, response);
//         } else {

//           const ongkirs = response.data.rajaongkir.results[0].costs;

//           const ongkirYangDipilih = ongkirs
//           .filter((ongkir) => ongkir.service === ekspedisi.service).map((filterOngkir) => {
//             return filterOngkir
//           });

//           //SUKSES
//           dispatchSuccess(
//             dispatch,
//             POST_ONGKIR,
//             ongkirYangDipilih[0],
//           );
//         }
//       })
//       .catch((error) => {
//         // ERROR
//         dispatchError(dispatch, POST_ONGKIR, error);

//         alert(error);
//       })

//   }
// }
