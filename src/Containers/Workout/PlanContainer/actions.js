import axios from 'axios';

export function getProgram(){
  return(dispatch: Function) => {
    return axios.get("https://nepal.sk8tech.io/wp-json/wp/v2/program?filter[posts_per_page]=1")
    .then((response)=> {
      console.log(response);
      dispatch(setGoal(response.data[0].acf.programname));
      dispatch(setGoal(response.data[0].acf.days))
    }).catch((error)=> {
      console.log(error);
    })
  }
}

export function setGoal(goal: String){
  console.log("setGoal");
  return {
    type: "SET_GOAL",
    payload: goal
  }
}
export function setDays(days: Number){
  console.log("setDays");
  return {
    type: "SET_DAYS",
    payload: days
  }
}
