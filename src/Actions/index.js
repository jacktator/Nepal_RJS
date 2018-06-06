import { LOGIN_DETAILS} from '../constants';
import { QUESTIONNAIRE } from '../constants';

//axios is for getting data from database and put them into the redux
import axios from 'axios';


export function loginDetails(loginDetail) {
  const action = {
    type: LOGIN_DETAILS,
    loginDetail
  }
  return action;
}

export function addQuestionnaire(questionnaire) {
  const action = {
    type: QUESTIONNAIRE,
    questionnaire
  }
  return action;
}

//==================================================================================



export function loadColor(){
  return(dispatch)=>{
    return axios.get("http://www.colr.org/json/color/random").then((response)=>{
      dispatch(changeColor("#"+response.data.new_color));
    }).catch((error)=>{
      dispatch(catchError(error))
    })
  };
}


//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer

export function changeColor(color){
  return {
    type:"CHANGE_COLOR",
    payload: color
  }
}

export function catchError(error){
  return{
    type: "CATCH_ERROR",
    payload: error
  }
}


