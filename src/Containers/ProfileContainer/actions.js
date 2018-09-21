import axios from 'axios';

export function getUserData(){
  return (dispatch: Function) => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('user_id');
    return axios(
      {
        method: 'get',
        url: `https://nepal.sk8tech.io/wp-json/wp/v2/Users/${userId}`,
        headers: {'Authorization': "Bearer" + token},
      }
    )
      .then((response) => {
        console.log(response.data);
        dispatch(changeName(response.data.name));
        dispatch(changeWeight(response.data.acf.weight));
        dispatch(changeAavatar(response.data.acf.photo));
    }).catch((error)=> {
      console.log(error);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Network Connection Error. Please check your network connection"))
      }
    })
  }
}

export function uploadPicture(file) {
  return (dispatch: Function) => {
    const data2 = new FormData();
    data2.append("file", file);
    let token = localStorage.getItem('token');
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
          dispatch(catchError("Network Connection Error. Please check your network connection"))
        }
      });  
  }
}

export function updateAvatar(url: string) {
  const aimUrl = "https://nepal.sk8tech.io/wp-json/wp/v2/users/" + localStorage.getItem('user_id');
  let token = localStorage.getItem('token');
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
        dispatch(catchError("Network Connection Error. Please check your network connection"))
      }
    });  
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

export function changeBirthDate (birthDate: Date) {
  let date = formatDate(birthDate)
  return {
    type: "CHANGE_BIRTH_DATE",
    payload: date.toString(),
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
// function to change the format of Date to YYYY-MM-DD
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
