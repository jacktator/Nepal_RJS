import axios from 'axios';

export function getProgram(){
  return(dispatch: Function) => {
    return axios.get("https://nepal.sk8tech.io/wp-json/wp/v2/program?filter[posts_per_page]=1")
    .then((response)=> {
      console.log("getProgram",response);
      dispatch(setProgram(response.data[0].acf));
      dispatch(setProgramID(response.data[0].id));

      dispatch(setProgramName(response.data[0].acf.program_name));
      dispatch(setDays(response.data[0].acf.days));
      dispatch(setExercises(response.data[0].acf.exercises));
      dispatch(setProgress(response.data[0].acf.progress));
    }).catch((error)=> {
      console.log(error);
    })
  }
}

export function fetchWorkoutList(code) {
  let token = localStorage.getItem('token');
  alert(code);
  return(dispatch: Function) => {
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/exercise?filter[meta_key]=code&filter[meta_value]=${code}`)
    .then((response) => {
      dispatch(setWorkoutList(response.data[0].acf));
      console.log(response.data[0].acf)
    }).catch((error) => {
      console.log(error);
    })
  }
}

export function keepWorkout(index, workoutReducers){
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    let id = workoutReducers.id;
    let {program} = workoutReducers;
    program.exercises[0].exercise_list[index].is_saved = true;
    dispatch(setProgram(program));
    return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${id}`,
      {
          status: "publish",
          fields: program
      }, {
        headers:{
          Authorization: "Bearer" + token
        }
      })
    .then((response)=> {
      dispatch(setProgram(response.data.acf));
    }).catch((error)=> {
      console.log(error);
    })
  }
}

export function setWorkoutList ( list_exercise: Object ) {
  return {
    type: "SET_WORKOUT_LIST",
    payload: list_exercise
  }
}
export function  setProgram( program: Object){
  return {
    type: "SET_PROGRAM",
    payload: program
  }
}

export function setProgramID (id: Number) {
  return {
    type: "SET_PROGRAM_ID",
    payload: id
  }
}

export function setProgramName(goal: String){
  return {
    type: "SET_PROGRAM_NAME",
    payload: goal
  }
}
export function setDays(days: Number){
  return {
    type: "SET_DAYS",
    payload: days
  }
}
export function setExercises(exercises: Object) {
  return {
    type: "SET_EXERCISES",
    payload: exercises
  }
}
export function setProgress(progress: Number) {
  return {
    type: "SET_Progress",
    payload: progress
  }
}
