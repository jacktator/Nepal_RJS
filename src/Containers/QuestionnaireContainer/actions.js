// @flow
import axios from 'axios';

export function addQuestionnaire(state) {
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/6764",
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
    dispatch(success(true));
    setTimeout(function(){
          dispatch(success(false));
      }.bind(this),700);
    //dispatch(questionnaire(state));
  }).catch((error) => {
    if(error.response){
      dispatch(addError(error.response.data.message));
    }else{
      dispatch(addError("Network Connection Error. Please check your network connection"))
    }
  })
}
}

export function addName (nick_name: string) {
  return {
    type: "ADD_NAME",
    payload: nick_name
  }
}

export function addAge (age: number) {
  return {
    type: "ADD_AGE",
    payload: age.toString()
  }
}
export function addGender (gender: string) {
  return {
    type: "ADD_GENDER",
    payload: gender
  }
}
export function addWeight (weight: number) {
  return {
    type: "ADD_WEIGHT",
    payload: weight.toString()
  }
}

export function addExercisePlace (exercisePlace: string) {
  return {
    type: "ADD_EXERCISE_PLACE",
    payload: exercisePlace
  }
}

export function addDays (days_per_week: number) {
  return {
    type: "ADD_DAYS",
    payload: days_per_week.toString()
  }
}

export function addGoals (goals: Object) {
  return {
    type: "ADD_GOALS",
    payload: goals
  }
}

export function addRehabFocus (rehab_focus: Object) {
  return {
    type: "ADD_REHAB_FOCUS",
    payload: rehab_focus
  }
}

export function addStress (stress: string) {
  return {
    type: "ADD_STRESS",
    payload: stress
  }
}
export function addProductivity (productivity: string) {
  return{
    type : "ADD_PRODUCITIVITY",
    payload: productivity
  }
}
export function addProductiveAfterExercise (productive_after_exercise) {
  return {
    type: "ADD_PRODCTIVE_AFTER_EXERCISE",
    payload: productive_after_exercise
  }
}

export function addWorkInjury (work_injury : string) {
  return {
    type: "ADD_WORK_INJURY",
    payload: work_injury
  }
}

export function addHealthFeeling (health_feeling: string) {
  return {
    type: "ADD_HEALTH_FEELING",
    payload: health_feeling
  }
}

export function addDailyActivity (daily_activity: string) {
  return {
    type: "ADD_DAILY_ACTIVITY",
    payload: daily_activity
  }
}

export function addCurrentActivity (current_activity: string) {
  return {
    type: "ADD_CURRENT_ACTIVITY",
    payload: current_activity
  }
}

export function getDataFromServer(data) {
  const action = {
    type: "DATA_FROM_SERVER",
    payload: data
  }
  return action;
}

export function addError (errorMessage: string) {
  return {
    type: "ADD_ERROR",
    payload: errorMessage
  }
}
export function removeError () {
  return {
    type: "REMOVE_ERROR",
    payload: null
  }
}

export function success (success: boolean) {
  return {
    type: "SUCESSFULLY_UPLOAD",
    payload: success
  }
}
