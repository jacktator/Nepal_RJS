import axios from 'axios';

export const setAuthTokenInHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  window.sessionStorage.setItem('token', token);
};

export const deleteAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
  sessionStorage.clear();
};

export const loginState = () => ({ type: 'CHECK_LOGINSTATE', payload: true });
export const registerState = () => ({ type: 'CHECK_REGISTER', payload: true });
export const queryLogin = data => ({ type: 'QUERY_LOGIN', payload: data });
export const errorHappened = data => ({ type: 'SHOW_ERROR', payload: data });
export const queryRegister = data => ({ type: 'QUERY_REGISTER', payload: data });
export const changeName = data => ({ type: 'SET_NAME', payload: data });
export const changeWeight = data => ({ type: 'SET_WEIGHT', payload: data });
export const changeAvatar = data => ({ type: 'SET_AVATAR', payload: data });
export const changeBirthDate = data => ({ type: 'SET_DOB', payload: data });
export const changeGender = data => ({ type: 'SET_GENDER', payload: data });
export const changeAge = data => ({ type: 'SET_AGE', payload: data });
export const setQueryProfile = data => ({ type: 'QUERY_PROFILE', payload: data });

export const loginAction = (userData, callBack) => (dispatch) => {
  axios.post('https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/', userData)
    .then((res) => {
      console.log(res);
      setAuthTokenInHeader(res.data.token.token);
      window.sessionStorage.setItem('user_id', res.data.user_id);
      window.sessionStorage.setItem('user_email', res.data.token.user_email);
      !!callBack && dispatch(callBack());
      dispatch(loginState());
    })
    .catch((err) => {
      dispatch(queryLogin(false));
      dispatch(errorHappened(true));
      console.log(err);
    });
};
export const registerAction = userData => (dispatch) => {
  axios.post('/users/register', userData)
    .then(
      (res) => {
        dispatch(loginAction({ username: userData.username, password: userData.password }, registerState));
      },
    )
    .catch((err) => {
      dispatch(queryRegister(false));
      dispatch(errorHappened(true));
      console.log(err);
    });
};

//---------------------------------------------------------------------------------------------------------------------
// Profile

export const getUserData = callBack => (dispatch) => {
  const userId = sessionStorage.getItem('user_id');
  axios.get(`/Users/${userId}`)
    .then((res) => {
      console.log(res.data);
      res.data.name && dispatch(changeName(res.data.name));
      res.data.acf.weight && dispatch(changeWeight(res.data.acf.weight));
      res.data.acf.photo && dispatch(changeAvatar(res.data.acf.photo));
      res.data.acf.gender && dispatch(changeGender(res.data.acf.gender));
      res.data.acf.age && dispatch(changeAge(res.data.acf.age));
      res.data.acf.dateofbirth && dispatch(changeBirthDate(res.data.acf.dateofbirth));
      callBack({
        name: res.data.name,
        weight: res.data.acf.weight,
        dob: res.data.acf.dateofbirth,
        gender: res.data.acf.gender,
        age: res.data.acf.age,
      });
      dispatch(setQueryProfile(false));
    }).catch(error => console.log(error));
};

export const updateUserData = (data, callBack) => (dispatch) => {
  const userId = sessionStorage.getItem('user_id');
  const {
    name, weight, gender, age, dob,
  } = data;
  axios.put(`/Users/${userId}`, {
    name,
    fields: {
      weight, gender, age, dob,
    },
  })
    .then((res) => {
      console.log(res.data);
      res.data.name && dispatch(changeName(res.data.name));
      res.data.acf.weight && dispatch(changeWeight(res.data.acf.weight));
      res.data.acf.photo && dispatch(changeAvatar(res.data.acf.photo));
      res.data.acf.gender && dispatch(changeGender(res.data.acf.gender));
      res.data.acf.age && dispatch(changeAge(res.data.acf.age));
      res.data.acf.dateofbirth && dispatch(changeBirthDate(res.data.acf.dateofbirth));
      callBack({
        name: res.data.name,
        weight: res.data.acf.weight,
        dob: res.data.acf.dateofbirth,
        gender: res.data.acf.gender,
        age: res.data.acf.age,
      });
      dispatch(setQueryProfile(false));
    }).catch(error => console.log(error));
};


export const uploadPicture = file => (dispatch) => {
  const data2 = new FormData();
  data2.append('file', file);
  return axios.post('/media', data2,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      dispatch(updateAvatar(res.data.source_url));
      console.log('uploadPicture');
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};


export const updateAvatar = url => (dispatch) => {
  axios.put(`/users/${sessionStorage.user_id}`,
    { fields: { photo: url } })
    .then((res) => {
      dispatch(changeAvatar(res.data.acf.photo));
      dispatch(setQueryProfile(false));
      console.log('update');
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
