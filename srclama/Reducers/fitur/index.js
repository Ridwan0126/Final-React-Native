import {GET_LIST_FITUR, GET_DETAIL_FITUR} from '../../actions/FiturAction';

const initialState = {
  getListFiturLoading: false,
  getListFiturResult: false,
  getListFiturError: false,

  getDetailProductLoading: false,
  getDetailProductResult: false,
  getDetailProductError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_FITUR:
      return {
        ...state,
        getListFiturLoading: action.payload.loading,
        getListFiturResult: action.payload.data,
        getListFiturError: action.payload.errorMessage,
      };

    case GET_DETAIL_FITUR:
      return {
        ...state,
        getDetailProductLoading: action.payload.loading,
        getDetailProductResult: action.payload.data,
        getDetailProductError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
