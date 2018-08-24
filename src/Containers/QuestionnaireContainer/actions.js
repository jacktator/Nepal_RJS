// @flow
import axios from 'axios';

export function addQuestionnaire(state) {
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/questionnaire/10621",
    {
      title: "Questionnaire",
      status: "publish",
      fields: state.fields
    }, {
      headers:{
        Authorization: "Bearer" + token
      }
    }
  ).then((response) => {
    dispatch(addProgram(response.data.acf.days_per_week, response.data.acf.goals));
    dispatch(success(true));
    setTimeout(function(){
      dispatch(success(false));
    },700);
    //dispatch(questionnaire(state));
  }).catch((error) => {
    if(error.response){
      dispatch(addError(error.response.data.message));
    }else{
      console.log(error);
      dispatch(addError("OOPs! Could not connect to the server."))
    }
  })
}
}

//Function to initialize the program after completion of the questionnaire
export function addProgram (days, goals) {
  let user_id = localStorage.getItem('user_id');
  let goal;
  switch (goals) {
    case "1":
      goal = "Muscle size and strength";
      break;
    case "2":
      goal = "Fat loss/ Definition";
      break;
    case "3":
      goal = "Decrease stress";
      break;
    case "4":
      goal = "Improve posture";
      break;
    case "5":
      goal = "Increase fitness";
      break;
    default:
      goal = "Please select the goal"
  }
  console.log(goal);
  console.log(goals);
  console.log(days);
  return(dispatch: Function) => {
    //fetch the list of exercise
    return axios.get("./DataSources/fatlossday3.json")
    .then((response)=> {
      alert("success");
      console.log("Response from json",response.data);

      return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/program",
      {
        status: "publish",
        fields: {
            userid: user_id,
            programname: goal,
            programdaynumber: days,
            progress: "1",
            difficultlevel: "1"
        }
      }).then((response) => {
        alert("Successfully created the program");
      }).catch((error) => {
        alert("Got error while creating the program");
      })
    }).catch((error)=> {
      console.log(error);
      alert("failure");
    })
  }
}

export function addName (nick_name: string) {
  let name = nick_name.slice(0,1).toUpperCase() + nick_name.slice(1, nick_name.length)
  return {
    type: "ADD_NAME",
    payload: name
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

export function addGoals (training_goals: string) {
  return {
    type: "ADD_GOALS",
    payload: training_goals
  }
}

export function addInjuryManagement (injury_management: string) {
  return {
    type: "ADD_INJURY_MANAGEMENT",
    payload: injury_management
  }
}
export function addPostureCorrection (posture_correction: string) {
  return {
    type: "ADD_POSTURE_CORRECTION",
    payload: posture_correction
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

export function getGoalFromServer(data) {
  const action = {
    type: "GET_GOAL_FROM_SERVER",
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
