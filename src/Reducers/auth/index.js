import {REGISTER_USER} from '../../actions/AuthAction';

const initialState = {
  getUserLoading: false,
  getUserResult: false,
  getUserError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log('Get Provinsi', action);
      return {
        ...state,
        getUserLoading: action.payload.loading,
        getUserResult: action.payload.data,
        getUserError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
