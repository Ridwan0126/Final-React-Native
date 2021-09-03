import {combineReducers} from 'redux';
import UserReducer from './User';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
});

export default rootReducer;
