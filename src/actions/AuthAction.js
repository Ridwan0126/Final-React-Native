import {Alert} from 'react-native';
// import {FIREBASE} from '../../firebase';
import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils';

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then(sukses => {
        // Signed in
        const dataBaru = {
          ...data,
          uid: sukses.user.uid,
        };
        // ...
        FIREBASE.database()
          .ref('users/' + sukses.user.uid)
          .set(dataBaru);

        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: dataBaru,
            errorMessage: false,
          },
        });

        storeData('user', dataBaru);
      })
      .catch(error => {
        // ..
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        Alert.alert(error);
      });
  };
};
