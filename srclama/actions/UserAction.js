export const GET_USER = 'GET_USER';

export const getUser = () => {
  console.log('Masuk User Actions');
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        nama: 'Ridwan',
        email: 'Rone@gmail.com',
      },
    });
  };
};
