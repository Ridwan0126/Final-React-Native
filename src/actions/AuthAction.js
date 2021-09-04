import {Alert} from 'react-native';
// import {FIREBASE} from '../../firebase';
import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    dispatchLoading(dispatch, REGISTER_USER);

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

        dispatchSuccess(dispatch, REGISTER_USER, dataBaru);

        storeData('user', dataBaru);
      })
      .catch(error => {
        dispatchError(dispatch, REGISTER_USER, error.message);
        Alert.alert(error);
      });
  };
};

export const loginUser = (email, password) => {
  console.log('Action Login', email + ' ' + password);
  return dispatch => {
    dispatchLoading(dispatch, LOGIN_USER);

    FIREBASE.auth()
      .signInWithEmailAndPassword(email, password)
      .then(Sukses => {
        // Signed in
        FIREBASE.database()
          .ref('/users/' + Sukses.user.uid)
          .once('value')
          .then(resDB => {
            // ...
            if (resDB.val()) {
              dispatchSuccess(dispatch, LOGIN_USER, resDB.val());

              storeData('user', resDB.val());
            } else {
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: false,
                  errorMessage: 'Sorry!. User Data Not Found!',
                },
              });
              Alert.alert('Sorry!. User Data Not Found!');
            }
          });
        // ...
      })
      .catch(error => {
        // ..
        dispatchError(dispatch, LOGIN_USER, error.message);
        Alert.alert('error', 'Guys! Yang bener dong');
      });
  };
};
