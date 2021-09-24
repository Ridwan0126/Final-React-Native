import {
  GET_LIST_PBB,
  GET_LIST_PBB_BY_FITUR,
  DELETE_PARAMETER_PBB,
  SAVE_KEYWORD_PBB,
} from '../../actions/PbbAction';

const initialState = {
  getListPbbLoading: false,
  getListPbbResult: false,
  getListPbbError: false,

  idFitur: false,
  namaFitur: false,
  keyword: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PBB:
      return {
        ...state,
        getListPbbLoading: action.payload.loading,
        getListPbbResult: action.payload.data,
        getListPbbError: action.payload.errorMessage,
      };
    case GET_LIST_PBB_BY_FITUR:
      return {
        ...state,
        idFitur: action.payload.idFitur,
        namaFitur: action.payload.namaFitur,
      };
    case DELETE_PARAMETER_PBB:
      return {
        ...state,
        idFitur: false,
        namaFitur: false,
        keyword: false,
      };
    case SAVE_KEYWORD_PBB:
      return {
        ...state,
        keyword: action.payload.data,
      };
    default:
      return state;
  }
}
