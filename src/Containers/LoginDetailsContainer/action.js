//@flow
import axios from 'axios';
import {checkLogin} from '../RootContainer/action';

export function LoginDetailsActions(email:string, password:string){
  console.log('this function LoginDetailsActions is running')
  console.log('email:'+ email)
  console.log('password'+ password)

  return(dispatch:Function)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/", {
      username: email,
      password: password,
    })
    .then((response)=>{
      let token = response.data.token
      window.localStorage.setItem('token', token);
      dispatch(upDateToken(token));
      dispatch(setGlobalAxiosDefault(token));
      dispatch(checkLogin());

      // dispatch(validToken(token));

    }).catch((error)=>{
      dispatch(catchError(error))
    })
  };
}

//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer


export function validToken(token:string){
  return(dispatch: Function)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/validate",
      null, {
        headers:{
          Authorization: "Bearer" + token
        }
      }
    )
    .then((response)=>{
      console.log(response.data.data.status)
      dispatch(isAuthenticated(response.data.data.status));
    })
    .catch((error)=>{
      dispatch(catchError(error));
    })
  };
}

export function setGlobalAxiosDefault(token: string){
  const newToken = "Bearer " + token;
  axios.defaults.headers.common["Authorization"] = newToken;
  return (dispatch: Function) => {
    console.log('setGlobalAxiosDefault run successfully')
  }
}

export function isAuthenticated(status: string){
  console.log(status)
  return{
    type:"IS_AUTHENTICATED",
    payload:true
  }
}

export function upDateToken(token: string){
  //console.log("now the token is :"+ token)
  return {
    type:"UPDATE_TOKEN",
    payload: token
  }
}

export function addEmail(email: string){
  //console.log("#####the value of email has been input into action:" + email)
  return {
    type:"ADD_EMAIL",
    payload: email
  }
}

export function addPassword(password: string){
  //console.log("#####the value of password has been input into action")
  return {
    type:"ADD_PASSWORD",
    payload: password
  }
}

export function catchError(error: string){
  return{
    type: "CATCH_ERROR",
    payload: error
  }
}
