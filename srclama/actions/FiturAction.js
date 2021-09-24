import axios from 'axios';
import {Alert} from 'react-native';
import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_FITUR = 'GET_LIST_FITUR';
export const GET_DETAIL_FITUR = 'GET_DETAIL_FITUR';

export const getListFitur = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_FITUR);

    // FIREBASE.database()
    //   .ref('fitur')
    //   .once('value', querySnapshot => {
    //     console.log('SnapShot', querySnapshot.val());
    //     let data = querySnapshot.val();
    //     // let data = querySnapshot.val() ? querySnapshot.val() : [];

    //     // let dataItem = {...data};

    //     dispatchSuccess(dispatch, GET_LIST_FITUR, data);
    //   })
    //   .catch(error => {
    //     dispatchError(dispatch, GET_LIST_FITUR, error);
    //     Alert.alert(error);
    //   });
  };
};

export const getDetailFitur = id => {
  return dispatch => {
    dispatchLoading(dispatch, GET_DETAIL_FITUR);

    axios('http://192.168.43.33:8080/api-backend/users/' + id)
      .then(response => {
        console.log('Respon API JAVA 0Produtststststtstststs', response);
        if (response.status !== 200) {
          dispatchError(dispatch, GET_DETAIL_FITUR, response);
        } else {
          console.log('Respon CONTOH DARI API 02saascascascasc', response.data);
          dispatchSuccess(
            dispatch,
            GET_DETAIL_FITUR,
            response.data ? response.data : [],
          );
        }
      })
      .catch(error => {
        dispatchError(dispatch, GET_DETAIL_FITUR, error);
        Alert.alert(error);
      });
    // FIREBASE.database()
    //   .ref('fitur/' + id)
    //   .once('value', querySnapshot => {
    //     //Hasil
    //     let data = querySnapshot.val();

    //     dispatchSuccess(dispatch, GET_DETAIL_FITUR, data);
    //   })
    //   .catch(error => {
    //     dispatchError(dispatch, GET_DETAIL_FITUR, error);
    //     alert(error);
    //   });
  };
};
