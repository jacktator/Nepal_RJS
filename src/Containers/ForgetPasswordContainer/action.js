//@flow
import axios from 'axios';

export function ForgetPasswordActions(email: string){
  return(dispatch: Function)=>{
    return axios.post("", {
      email: email,
    })
    .then((response)=>{
      console.log('the reset has been successful!!')

    }).catch((error)=>{
      dispatch(catchError(error))
    })
  };
}


export function addEmail(email: string){
  //console.log("#####the value of email has been input into action")
  return {
    type:"ADD_EMAIL",
    payload: email
  }
}


export function catchError(error: string){
  return{
    type: "CATCH_ERROR",
    payload: error
  }
}
