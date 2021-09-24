import {GET_CONTOH} from '../../actions/RajaOngkirAction';

const initialState = {
  getListContohLoading: false,
  getListContohResult: false,
  getListContohError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTOH:
      return {
        ...state,
        getListContohLoading: action.payload.loading,
        getListContohResult: action.payload.data,
        getListContohError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
