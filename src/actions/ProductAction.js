import {Alert} from 'react-native';
import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';
export const GET_LIST_PRODUCT_BY_FITUR = 'GET_LIST_PRODUCT_BY_FITUR';
export const DELETE_PARAMETER_PRODUCT = 'DELETE_PARAMETER_PRODUCT';
export const SAVE_KEYWORD_PRODUCT = 'SAVE_KEYWORD_PRODUCT';

export const getListProduct = (idProduct, keyword) => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    if (idProduct) {
      // console.log('ID PRODUCT', idProduct);
      FIREBASE.database()
        .ref('product')
        .orderByChild('idProduct')
        .equalTo(idProduct)
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    } else if (keyword) {
      FIREBASE.database()
        .ref('product')
        .orderByChild('kategory')
        .equalTo(keyword) //.toUpperCase()
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          alert(error);
        });
    } else {
      FIREBASE.database()
        .ref('product')
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PRODUCT, error);
          Alert.alert(error);
        });
    }
  };
};

export const limitProduct = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    FIREBASE.database()
      .ref('product')
      .limitToLast(6)
      .once('value', querySnapshot => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_PRODUCT, error);
        Alert.alert(error);
      });
  };
};

export const getProductByFitur = (id, namaFitur) => ({
  type: GET_LIST_PRODUCT_BY_FITUR,
  payload: {
    idProduct: id,
    namaFitur: namaFitur,
  },
});

export const deleteParameterProduct = () => ({
  type: DELETE_PARAMETER_PRODUCT,
});

export const saveKeywordProduct = search => ({
  type: SAVE_KEYWORD_PRODUCT,
  payload: {
    data: search,
  },
});
