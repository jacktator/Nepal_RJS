import axios from 'axios';
// import {checkLogin} from '../RootContainer/action';
import {LoginDetailsActions} from '../LoginDetailsContainer/action';
import {checkRegister} from '../RootContainer/action';
export function SignUpActions(email, password){
  return(dispatch)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/users/register", {
      username: email,
      email: email,
      password: password,
    })
    .then((response)=>{
      console.log('register successfully!!')
      console.log(response.data);
      console.log(response);
      let login = JSON.parse(response.config.data);
      dispatch(checkRegister(true));
      dispatch(LoginDetailsActions(login.email, login.password));
      dispatch(fetchResponse(response.data.code));
    }).catch((error)=>{
      if (error.response) {
        console.log(error.response.data);
        //dispatch(catchError(error.response.data.message))
      }else{
        dispatch(catchError("Unable to connect with server"))
      }
    })
  };
}
export function addUsername(username){
  return {
    type:"ADD_USERNAME",
    payload: username
  }
}

export function addEmail(email){
  //console.log("#####the value of email has been input into action")
  return {
    type:"ADD_EMAIL",
    payload: email
  }
}

export function addPassword(password){
  //console.log("#####the value of password has been input into action")
  return {
    type:"ADD_PASSWORD",
    payload: password
  }
}

export function catchError(error){

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
export function fetchResponse(fetch){
  console.log("fetch", fetch);
  return{
    type: "FETCH_RESPONSE",
    payload: fetch
  }
}
