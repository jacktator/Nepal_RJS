import axios from 'axios';

export function getProgram(){
  return(dispatch: Function) => {
    return axios.get("https://nepal.sk8tech.io/wp-json/wp/v2/program?filter[posts_per_page]=1")
    .then((response)=> {
      console.log("getProgram",response);
      dispatch(setProgramName(response.data[0].acf.programname));
      dispatch(setDays(response.data[0].acf.days))
    }).catch((error)=> {
      console.log(error);
    })
  }
}

export function setProgramName(goal: String){
  console.log("setGoal",goal);
  return {
    type: "SET_PROGRAM_NAME",
    payload: goal
  }
}
export function setDays(days: Number){
  console.log("setDays",days);
  return {
    type: "SET_DAYS",
    payload: days
  }
}
