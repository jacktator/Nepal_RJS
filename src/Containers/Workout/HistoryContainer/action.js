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

  export function getRecord(){
    return(dispatch: Function) => {
      return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/record?filter[meta_key]=program_id&filter[meta_value]=15603`)
      .then((response) => {
        console.log(response);
        dispatch(setExerciseRecord(response.data[0].acf));
        dispatch(setExerciseID(response.data[0].id))
      }).catch((error)=> {
        console.log(error);
      })
    }//end return dispatch function
  }

  export function setProgram( program: Object){
    return {
      type: "SET_PROGRAM",
      payload: program
    }
  }

  //This function is to set ID for the program
  export function setProgramID (programID: Number) {
    return {
      type: "SET_PROGRAM_ID",
      payload: programID
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
  export function setExerciseRecord(record: Object) {
    return {
      type: "SET_EXERCISE_RECORD",
      payload: record
    }
  }

  export function setExerciseID(recordID: Number) {
    return {
      type: "SET_EXERCISE_ID",
      payload: recordID
    }
  }
