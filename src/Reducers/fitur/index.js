import {GET_LIST_FITUR} from '../../actions/FiturAction';

const initialState = {
  getListFiturLoading: false,
  getListFiturResult: false,
  getListFiturError: false,

  //   getDetailLigaLoading: false,
  //   getDetailLigaResult: false,
  //   getDetailLigaError: false,
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

    // case GET_DETAIL_LIGA:
    //   return {
    //     ...state,
    //     getDetailLigaLoading: action.payload.loading,
    //     getDetailLigaResult: action.payload.data,
    //     getDetailLigaError: action.payload.errorMessage,
    //   };
    default:
      return state;
  }
}
