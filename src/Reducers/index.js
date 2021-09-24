import {combineReducers} from 'redux';
import UserReducer from './user';
import RajaOngkirReducer from './rajaongkir';
import AuthReducer from './auth';
import ProfileReducer from './profile';
import FiturReducer from './fitur';
import PbbReducer from './pbb';
import KeranjangReducer from './keranjang';
import PaymentReducer from './payment';
import PesananReducer from './pesanan';
import HistoryReducer from './history';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
  ProfileReducer,
  FiturReducer,
  PbbReducer,
  KeranjangReducer,
  PaymentReducer,
  PesananReducer,
  HistoryReducer,
});

export default rootReducer;
