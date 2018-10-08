//@flow
import axios from 'axios';
import {checkLogin} from '../RootContainer/action';

export function LoginDetailsActions(email:string, password:string){
  return(dispatch:Function)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/", {
      username: email,
      password: password,
    })
    .then((response)=>{
      let token = response.data.token;
      window.sessionStorage.setItem('token', token);
      window.sessionStorage.setItem('user_id', response.data.user_id);
      window.sessionStorage.setItem('user_email', response.data.user_email);
      dispatch(upDateToken(token));
      dispatch(setGlobalAxiosDefault(token));
      dispatch(checkLogin());
      dispatch(validToken(token));

    }).catch((error)=>{
      if(error.response){
        dispatch(catchError("The username or password you entered is incorrect."));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  };
}
//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer

export function validToken(token:string){
  console.log("Token",token);
  return(dispatch: Function)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/validate",
      null, {
        headers:{
          Authorization: "Bearer" + token
        }
      }
    )
    .then((response)=>{

      console.log(response.data.data.status);

      dispatch(setTokenError(false));
      dispatch(setGlobalAxiosDefault(token));
    })
    .catch((error)=>{
      window.sessionStorage.clear();
      dispatch(setTokenError(true));
      dispatch(isAuthenticated(false));
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

export function isAuthenticated(status: Boolean){
  return{
    type:"IS_AUTHENTICATED",
    payload:status
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
export function removeError(){
  return{
    type: "REMOVE_ERROR",
    payload: null
  }
}
export function setTokenError(isInvalidToken: Boolean) {
  return{
    type: "SET_TOKEN_ERROR",
    payload: isInvalidToken
  }
}
