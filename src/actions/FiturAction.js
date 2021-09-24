import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_FITUR = 'GET_LIST_FITUR';
export const GET_DETAIL_FITUR = 'GET_DETAIL_FITUR';

export const getListFitur = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_FITUR);

    FIREBASE.database()
      .ref('fitur')
      .once('value', querySnapshot => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_FITUR, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_FITUR, error);
        alert(error);
      });
  };
};

export const getDetailFitur = id => {
  return dispatch => {
    dispatchLoading(dispatch, GET_DETAIL_FITUR);

    FIREBASE.database()
      .ref('fitur/' + id)
      .once('value', querySnapshot => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_DETAIL_FITUR, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_DETAIL_FITUR, error);
        alert(error);
      });
  };
};
