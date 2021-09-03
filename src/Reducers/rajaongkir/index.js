import {GET_PROVINSI, GET_KOTA} from '../../actions/RajaOngkirAction';

const initialState = {
  getProvinsiLoading: false,
  getProvinsiResult: false,
  getProvinsiError: false,

  getKotaLoading: false,
  getKotaResult: false,
  getKotaError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROVINSI:
      console.log('Get Provinsi', action);
      return {
        ...state,
        getProvinsiLoading: action.payload.loading,
        getProvinsiResult: action.payload.data,
        getProvinsiError: action.payload.errorMessage,
      };
    case GET_KOTA:
      console.log('Get Kota', action);
      return {
        ...state,
        getKotaLoading: action.payload.loading,
        getKotaResult: action.payload.data,
        getKotaError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
