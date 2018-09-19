import axios from 'axios';

export function getProgram(){
  return(dispatch: Function) => {
    let user_id = localStorage.getItem('user_id');
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/program?
                    filter[meta_key]=user_id&filter[meta_value]=${user_id}&filter[posts_per_page]=1`
    )
    .then((response)=> {
      console.log("this is response from get program",response);
      const progress = parseInt(response.data[0].acf.progress,10);
      const days = parseInt(response.data[0].acf.days,10);
      const value = response.data[0].acf.feedback_value;
      const currentWeek = Math.ceil(progress / days);
      const currentDay = progress - ((currentWeek -1 ) * days)

      const programStartDate = new Date(response.data[0].date);
      const currentDate = new Date().getTime();
      let difference = currentDate - programStartDate;
      let daysDifference = Math.floor(difference/1000/60/60/24) + 1;
      let update = false;
      const runningWeek = Math.ceil(daysDifference/7)
      const dayCountForRunningWeek =  daysDifference - (runningWeek-1) * 7 ;
      let currentProgress;

      if(dayCountForRunningWeek <= days){
        currentProgress = (runningWeek-1) * days + dayCountForRunningWeek;
      }else{
        currentProgress = (runningWeek-1) * days + days;
      }
      if(parseInt(progress,10) !== currentProgress){
        update = true;
        const askFeedback = parseInt(value, 10) ===0 ? true : false

        if(runningWeek === 5 && currentWeek !== 5){
          dispatch(implementDeloadAlgorithm(response.data[0].id, response.data[0].acf, currentProgress, askFeedback))
        }else{
          dispatch(updateProgress(response.data[0].id, currentProgress, askFeedback))
        }
      }else{
        console.log("Need to add logic for off days in action line 30")
      }
      if(!update){
        dispatch(setProgram(response.data[0].acf));
        dispatch(setProgramID(response.data[0].id));
        dispatch(setCurrentWeek(currentWeek));
        dispatch(setCurrentDay(currentDay));
      }
    }).catch((error)=> {
      console.log(error);
    })
  }
}

export function implementDeloadAlgorithm(programID, program, progress, ask_feedback){
  return((dispatch: Function) => {
    program.exercises.map((exercise, index) => {
      exercise.exercise_list.map((daily_exercise, dayIndex) => {
        let sets = parseInt(daily_exercise.sets,10)
        let reps = parseInt(daily_exercise.reps,10)
        let weight = parseInt(daily_exercise.weight,10);
        // let deload_strategy = daily_exercise.deload_strategy;
        let progression_model = daily_exercise.progression_model;
        reps -= 1;
        program.exercises[index].exercise_list[dayIndex].reps = reps;
        if(sets > 2){
          sets -= 1;
          program.exercises[index].exercise_list[dayIndex].sets = sets;
        }
        if(progression_model === "linear"){
          if(weight >= 22.5 && weight < 50){
            weight -= 2.5;
          }else if(weight >=50 && weight < 100){
            weight -= 5;
          }else if(weight >= 100){
            weight -= 7.5;
          }
          program.exercises[index].exercise_list[dayIndex].weight = weight;
        }
        return null;
      })//ends second map function
      return null;
    })//ends first map function
    program.progress= progress;
    program.ask_feedback= ask_feedback;
    program.feedback_value= 0;
    program.finish_for_day= false;
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,{
      status: "publish",
      fields: program
    }).then((response) => {
      const progress = response.data.acf.progress;
      const days = response.data.acf.days;
      const currentWeek = Math.ceil(progress / days);
      const currentDay = progress - ((currentWeek -1 ) * days)
      dispatch(setProgram(response.data.acf));
      dispatch(setProgramID(response.data.id));
      dispatch(setCurrentWeek(currentWeek));
      dispatch(setCurrentDay(currentDay));
    }).catch((error) => {
      alert("error")
      console.log(error)
    })//end catch
  })//ends dispatch return
}//ends function

export function updateProgress(programID, progress, ask_feedback){
  return((dispatch: Function) => {
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,{
      status: "publish",
      fields: {
        progress: progress,
        ask_feedback: ask_feedback,
        feedback_value: 0,
        finish_for_day: false
      }
    }).then((response) => {
      const progress = response.data.acf.progress;
      const days = response.data.acf.days;
      const currentWeek = Math.ceil(progress / days);
      const currentDay = progress - ((currentWeek -1 ) * days)
      dispatch(setProgram(response.data.acf));
      dispatch(setProgramID(response.data.id));
      dispatch(setCurrentWeek(currentWeek));
      dispatch(setCurrentDay(currentDay));
    }).catch((error) => {
      alert("error")
      console.log(error)
    })
  })//ends return dispatch
}

export function getHistory() {
  // alert("get history");
  return(dispatch: Function) => {
    let user_id = localStorage.getItem('user_id');
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/record?filter[meta_key]=user_id&filter[meta_value]=${user_id}`)
    .then((response) => {
      console.log(response);
      console.log("response",response.data)
      let historyData = [];
      response.data.map((data,key) => (
        historyData.push(data.acf)
      ))
      dispatch(setHistory(historyData))
    }).catch((error)=> {
      console.log(error);
    })
  }//end return dispatch function
}
export function setHistory( history: Object){
  return {
    type: "SET_HISTORY",
    payload: history
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

export function setProgram( program: Object){
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
