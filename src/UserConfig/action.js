import axios from 'axios';

export const setAuthTokenInHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  window.sessionStorage.setItem('token', token);
};

export const deleteAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
  sessionStorage.clear();
};

export const loginState = () => ({
  type: 'CHECK_LOGINSTATE',
  payload: true,
});
export const registerState = () => ({
  type: 'CHECK_REGISTER',
  payload: true,
});

export const loginAction = userData => (dispatch) => {
  axios.post('https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/', userData)
    .then((res) => {
      console.log(res);
      setAuthTokenInHeader(res.data.token.token);
      window.sessionStorage.setItem('user_id', res.data.user_id);
      window.sessionStorage.setItem('user_email', res.data.token.user_email);
      dispatch(loginState());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const registerAction = userData => (dispatch) => {
  axios.post('/users/register', userData)
    .then(
      (res) => {
        dispatch(registerState());
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};
