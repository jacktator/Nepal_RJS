import axios from 'axios';

export function getProgram(){
  return(dispatch: Function) => {
    return axios.get("https://nepal.sk8tech.io/wp-json/wp/v2/program?filter[posts_per_page]=1")
    .then((response)=> {
      const progress = response.data[0].acf.progress;
      const days = response.data[0].acf.days;
      const currentWeek = Math.ceil(progress / days);
      const currentDay = progress - ((currentWeek -1 ) * days)
      dispatch(setProgram(response.data[0].acf));
      dispatch(setProgramID(response.data[0].id));
      dispatch(setCurrentWeek(currentWeek));
      dispatch(setCurrentDay(currentDay));

    }).catch((error)=> {
      console.log(error);
    })
  }
}

export function selectWorkout(listIndex, workoutReducers, selectedExercise) {
    return(dispatch: Function) => {
      let token = localStorage.getItem('token');
      let id = workoutReducers.id;
      let { program, dayIndex } = workoutReducers;
      program.exercises[dayIndex].exercise_list[listIndex].workout = selectedExercise.name;
      program.exercises[dayIndex].exercise_list[listIndex].progression_model = selectedExercise.progression_model;
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
        alert("error");
      })
    }
}

export function fetchWorkoutList(code) {
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/exercise?filter[meta_key]=code&filter[meta_value]=${code}`)
    .then((response) => {
      dispatch(setWorkoutList(response.data[0].acf));
    }).catch((error) => {
      console.log(error);
    })
  }
}

export function keepWorkout(listIndex, workoutReducers){
  let token = localStorage.getItem('token');
  return(dispatch: Function) => {
    let id = workoutReducers.id;
    let {program, dayIndex} = workoutReducers;
    program.exercises[dayIndex].exercise_list[listIndex].is_saved = true;
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

export function setCurrentWeek ( currentWeek: Number) {
  return {
    type: "SET_CURRENT_WEEK",
    payload: currentWeek
  }
}

export function setCurrentDay ( currentDay: Number) {

  return {
    type: "SET_CURRENT_DAY",
    payload: currentDay
  }
}

//This funciton is used to store the dayIndex which is used when user click select.
export function setDayIndex ( dayIndex: Number) {
  alert("setDayIndex action");
  alert(dayIndex);
  return {
    type: "SET_DAY_iNDEX",
    payload: dayIndex
  }
}

//This function is used to list the current exercise list while user want to change workout.
export function setWorkoutList ( listExercise: Object ) {
  return {
    type: "SET_WORKOUT_LIST",
    payload: listExercise
  }
}

//This function is to set the program
export function  setProgram( program: Object){
  return {
    type: "SET_PROGRAM",
    payload: program
  }
}

//This function is to set ID for the program
export function setProgramID (id: Number) {
  return {
    type: "SET_PROGRAM_ID",
    payload: id
  }
}
