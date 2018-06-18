// @flow
import axios from 'axios';
import { QUESTIONNAIRE } from '../../constants';

export function stepOne(state) {
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/",
      {
        title: "AutoTitle",
        fields: state.fields
      }, {
        headers:{
          Authorization: "Bearer" + token
        }
      }
    ).then((response) => {
      console.log("Response",response)
    }).catch((error) => {
      console.log("Error",error)
    })
  }
}
export function addQuestionnaire(state) {
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/",
      {
        title: "Questionnaire",
        fields: state.fields
      }, {
        headers:{
          Authorization: "Bearer" + token
        }
      }
    ).then((response) => {
      console.log("Response",response)
      dispatch(questionnaire(state));
    }).catch((error) => {
      console.log("Error",error)
    })
  }
}

export function questionnaire(state) {
    const action = {
    type: QUESTIONNAIRE,
    state
   }
  return action;
}
