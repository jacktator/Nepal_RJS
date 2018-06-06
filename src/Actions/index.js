import { LOGIN_DETAILS} from '../constants';


import Axios from 'axios';


export function loginDetails(loginDetail) {
  const action = {
    type: LOGIN_DETAILS,
    loginDetail
  }
  return action;
}
export function Questionnaire(detail) {
  const action = {
    type: LOGIN_DETAILS,
    detail
  }
  return action;
}
//==================================================================================
//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer


export function loadColor(){
  return(dispatch: Function)=>{
    return Axios.get("http://www.colr.org/json/colors/random/7").then((response)=>{
      dispatch(changeColor("#"+response.data.hex));
    }).catch((error)=>{
      dispatch(catchError(error))
    })

  }
}

export function changeColor(color: Object){
  return {
    type:"CHANGE_COLOR",
    color: color
  }
}

export function catchError(error: Object){
  return{
    type: "CATCH_ERROR",
    error: error
  }
}
