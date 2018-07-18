// @flow
import axios from 'axios';

export function stepOne(nick_name: string, age: number, gender: string, weight: number, exercisePlace: string) {
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/",
    {
      fields: { age, gender, weight, exercisePlace }
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
    console.log("Response +6764",response.data)
    console.log("Response: ", response)
    let id = response.data.id;
    let fields = response.data.acf;
    window.localStorage.setItem('questionnaire_id',id)
      dispatch(setError(''));
    dispatch(getDataFromServer(fields));
  }).catch((error) => {
    dispatch(setError('unable to uplaod to server'));
    console.log("Error",error)
  })
}
}

export function stepTwo(days_per_week: number, goals: Object) {
  return(dispatch: Function) => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('questionnaire_id')
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/"+id,
    {
      fields: { days_per_week:days_per_week, goals }
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
      console.log("Response",response)
      let fields = response.data.acf;
      dispatch(setError(''));
      dispatch(getDataFromServer(fields));
    }).catch((error) => {
      dispatch(setError('unable to uplaod to server'));
      console.log("Error",error)
    })
  }
}
export function stepThree(rehab_focus: Object) {
  return(dispatch: Function) => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('questionnaire_id')
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/"+id,
    {
      fields: { rehab_focus }
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
    console.log("Response",response)
    let fields = response.data.acf;
    dispatch(setError(''));
    dispatch(getDataFromServer(fields));
  }).catch((error) => {
    dispatch(setError('unable to uplaod to server'));
    console.log("Error",error)
  })
}
}
export function stepFour(stress, productivity) {
  return(dispatch: Function) => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('questionnaire_id')
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/"+id,
    {
      fields: { stress, productivity }
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
    console.log("Response",response)
    let fields = response.data.acf;
    dispatch(setError(''));
    dispatch(getDataFromServer(fields));
  }).catch((error) => {
    dispatch(setError('unable to uplaod to server'));
    console.log("Error",error)
  })
}
}
export function stepFive(work_injury, health_feeling) {
  return(dispatch: Function) => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('questionnaire_id')
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/"+id,
    {
      fields: { work_injury, health_feeling }
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
    console.log("Response",response)
    let fields = response.data.acf;
    dispatch(setError(''));
    dispatch(getDataFromServer(fields));
  }).catch((error) => {
    dispatch(setError('unable to uplaod to server'));
    console.log("Error",error)
  })
}
}
export function stepSix(current_activity, daily_activity) {
  return(dispatch: Function) => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('questionnaire_id')
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/"+id,
    {
      fields: { current_activity, daily_activity }
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
    console.log("Response",response)
    let fields = response.data.acf;
    dispatch(getDataFromServer(fields));
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
    // dispatch(questionnaire(state));
  }).catch((error) => {
    console.log("Error",error)
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
    payload: age
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
export function setError(errorMessage) {
  const action = {
    type: "SET_ERROR",
    payload: errorMessage
  }
  return action;
}
