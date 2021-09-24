import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_PBB = 'GET_LIST_PBB';
export const GET_LIST_PBB_BY_FITUR = 'GET_LIST_PBB_BY_FITUR';
export const DELETE_PARAMETER_PBB = 'DELETE_PARAMETER_PBB';
export const SAVE_KEYWORD_PBB = 'SAVE_KEYWORD_PBB';

export const getListPbb = (idFitur, keyword) => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PBB);

    if (idFitur) {
      FIREBASE.database()
        .ref('pbb')
        .orderByChild('Fitur')
        .equalTo(idFitur)
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PBB, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PBB, error);
          alert(error);
        });
    } else if (keyword) {
      FIREBASE.database()
        .ref('pbb')
        .orderByChild('nop')
        .equalTo(keyword.toUpperCase())
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PBB, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PBB, error);
          alert(error);
        });
    } else {
      FIREBASE.database()
        .ref('pbb')
        .once('value', querySnapshot => {
          //Hasil
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_PBB, data);
        })
        .catch(error => {
          dispatchError(dispatch, GET_LIST_PBB, error);
          alert(error);
        });
    }
  };
};

export const limitPbb = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_PBB);

    FIREBASE.database()
      .ref('pbb')
      .limitToLast(6)
      .once('value', querySnapshot => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_PBB, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_PBB, error);
        alert(error);
      });
  };
};

export const getPbbByFitur = (id, namaFitur) => ({
  type: GET_LIST_PBB_BY_FITUR,
  payload: {
    idFitur: id,
    namaFitur: namaFitur,
  },
});

export const deleteParameterPbb = () => ({
  type: DELETE_PARAMETER_PBB,
});

export const saveKeywordPbb = search => ({
  type: SAVE_KEYWORD_PBB,
  payload: {
    data: search,
  },
});
