import {combineReducers} from 'redux';
import UserReducer from './User';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import FiturReducer from './fitur';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  FiturReducer,
});

export default rootReducer;
