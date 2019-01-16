import axios from 'axios';

export function getUserData(){
  return (dispatch: Function) => {
    let token = sessionStorage.getItem('token');
    let userId = sessionStorage.getItem('user_id');
    return axios(
      {
        method: 'get',
        url: `https://nepal.sk8tech.io/wp-json/wp/v2/Users/${userId}`,
        headers: {'Authorization': "Bearer" + token},
      }
    )
      .then((response) => {
        console.log(response.data);
        response.data.name && dispatch(changeName(response.data.name));
        response.data.acf.weight && dispatch(changeWeight(response.data.acf.weight));
        response.data.acf.photo && dispatch(changeAavatar(response.data.acf.photo));
        response.data.acf.dateofbirth && dispatch(changeBirthDate(response.data.acf.dateofbirth));
        response.data.acf.height && dispatch(changeHeight(response.data.acf.height));
    }).catch((error)=> {
      console.log(error);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }
}

export function uploadPicture(file) {
  return (dispatch: Function) => {
    const data2 = new FormData();
    data2.append("file", file);
    let token = sessionStorage.getItem('token');
    return axios.post('https://nepal.sk8tech.io/wp-json/wp/v2/media', data2,
      {
        headers: {
          'Authorization': "Bearer" + token,
          'Content-Type': "multipart/form-data",
        }
      }
    )
      .then(function (response) {
        dispatch(updateAvatar(response.data.source_url));
        console.log("uploadPicture");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        if(error.response){
          dispatch(catchError(error.response.data.message));
        }else{
          dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
        }
      });
  }
}

export function updateAvatar(url: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + sessionStorage.getItem('user_id');
  let token = sessionStorage.getItem('token');
  return (dispatch: Function) => {
    return axios.put(aimUrl, { "fields": {"photo": url}}, { headers: { 'Authorization': "Bearer" + token } })
    .then(function (response) {
      dispatch(changeAavatar(response.data.acf.photo));
      console.log("update");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    });
  }
}

export function  updateName(name: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + sessionStorage.getItem('user_id');
  let token = sessionStorage.getItem('token');
  return (dispatch: Function) => {
    return axios.put(aimUrl, { "name": name }, { headers: { 'Authorization': "Bearer" + token } })
      .then(res => {
        dispatch(changeName(res.data.name));
      })
      .catch(error => console.log(error));
  }
}

export function updateBOD(bod: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + sessionStorage.getItem('user_id');
  let token = sessionStorage.getItem('token');
  return (dispatch: Function) => {
    return axios.put(aimUrl, {"fields": {"dateofbirth": bod}}, { headers: { 'Authorization': "Bearer" + token } })
      .then(res => {
        dispatch(changeBirthDate(res.data.acf.dateofbirth));
      })
      .catch(error => console.log(error));
  }
}

export function updateWeight(weight: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + sessionStorage.getItem('user_id');
  let token = sessionStorage.getItem('token');
  return (dispatch: Function) => {
    return axios.put(aimUrl, {"fields": {"weight": weight}}, { headers: { 'Authorization': "Bearer" + token } })
      .then(res => {
        console.log(res.data.acf.weight)
        dispatch(changeWeight(res.data.acf.weight));
      })
      .catch(error => console.log(error));
  }
}

export function updateHeight(height: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + sessionStorage.getItem('user_id');
  let token = sessionStorage.getItem('token');
  return (dispatch: Function) => {
    return axios.put(aimUrl, {"fields": {"height": height}}, { headers: { 'Authorization': "Bearer" + token } })
      .then(res => {
        console.log(res.data.acf.height)
        dispatch(changeHeight(res.data.acf.height));
      })
      .catch(error => console.log(error));
  }
}

export function updataPassword(password: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + sessionStorage.getItem('user_id');
  let token = sessionStorage.getItem('token');
  return (dispatch: Function) => {
    return axios.put(aimUrl, {"password": password}, { headers: { 'Authorization': "Bearer" + token } })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.log(error));
  }
}

export function changeAavatar(photo: string) {
  return {
    type: "CHANGE_AVATAR",
    payload: photo
  }
};

export function changeName (nick_name: string) {
  let name = nick_name.slice(0,1).toUpperCase() + nick_name.slice(1, nick_name.length)
  return {
    type: "CHANGE_NAME",
    payload: name
  }
}

export function changeBirthDate(dateofbirth: string) {
  return {
    type: "CHANGE_BIRTH_DATE",
    payload: dateofbirth,
  }
}

export function changeWeight (weight: number) {
  return {
    type: "CHANGE_WEIGHT",
    payload: weight.toString(),
  }
}

export function changeHeight (height: number) {
  return {
    type: "CHANGE_HEIGHT",
    payload: height.toString(),
  }
}

export function changeEmail (email: string) {
  return {
    type: "CHANGE_EMAIL",
    payload: email,
  }
}

export function putPassword (value: string, field: string,) {
  return{
    type: "PUT_PASSWORD",
    payload: value,
    field,
  }
}

export function changePassword (password: string) {
  return {
    type: "CHANGE_PASSWORD",
    payload: password,
  }
}

export function showPassError (passError: string) {
  return {
    type: "SHOW_PASS_ERROR",
    payload: passError,
  }
}
export function catchError(error: string){
  console.log(error);
  return{
    type: "CATCH_ERROR",
    payload: error
  }
}
export function removeError(){
  return{
    type: "REMOVE_ERROR",
    payload: null
  }
}
