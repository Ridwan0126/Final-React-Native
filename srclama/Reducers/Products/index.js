import {
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_BY_FITUR,
  DELETE_PARAMETER_PRODUCT,
  SAVE_KEYWORD_PRODUCT,
} from '../../actions/ProductAction';

const initialState = {
  getListProductLoading: false,
  getListProductResult: false,
  getListProductError: false,

  idProduct: false,
  namaFitur: false,
  keyword: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductLoading: action.payload.loading,
        getListProductResult: action.payload.data,
        getListProductError: action.payload.errorMessage,
      };
    case GET_LIST_PRODUCT_BY_FITUR:
      console.log('REDUCER MASUK');
      return {
        ...state,
        idProduct: action.payload.idProduct,
        namaFitur: action.payload.namaFitur,
      };
    case DELETE_PARAMETER_PRODUCT:
      return {
        ...state,
        idProduct: false,
        namaProduct: false,
        keyword: false,
      };
    case SAVE_KEYWORD_PRODUCT:
      return {
        ...state,
        keyword: action.payload.data,
      };
    default:
      return state;
  }
}
