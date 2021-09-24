import {GET_LIST_FITUR, GET_DETAIL_FITUR} from '../../actions/FiturAction';

const initialState = {
  getListFiturLoading: false,
  getListFiturResult: false,
  getListFiturError: false,

  getDetailFiturLoading: false,
  getDetailFiturResult: false,
  getDetailFiturError: false,
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
        getDetailFiturLoading: action.payload.loading,
        getDetailFiturResult: action.payload.data,
        getDetailFiturError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
