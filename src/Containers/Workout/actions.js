import axios from 'axios';
import {validToken} from '../LoginDetailsContainer/action';

//This function used to initialize the program to the redux during loading plan page
export function getProgram(){
  return(dispatch: Function) => {
    let user_id = sessionStorage.getItem('user_id');
    let token = sessionStorage.getItem('token');
    //dispatch(validToken(token));
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/program?
                    filter[meta_key]=user_id&filter[meta_value]=${user_id}&filter[posts_per_page]=1`
    )
    .then((response)=> {
      //if there is no data found on program
      if(response.data.length === 0){
        dispatch(redirectToQuestionnaire(true));
        setTimeout(function(){
          dispatch(redirectToQuestionnaire(false));
        },2000);
      }else{
        const progress = parseInt(response.data[0].acf.progress,10);
        const days = parseInt(response.data[0].acf.days,10);
        const value = response.data[0].acf.feedback_value;
        const exercisePlace = response.data[0].acf.exercise_place;
        const currentWeek = Math.ceil(progress / days);
        //const currentDay = progress - ((currentWeek -1 ) * days)
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
        if(parseInt(progress,10) < currentProgress){
          update = true;
          const askFeedback = parseInt(value, 10) ===0 ? true : false

          if(runningWeek === 5 && currentWeek !== 5 && exercisePlace === "gym"){
            dispatch(implementDeloadAlgorithm(response.data[0].id, response.data[0].acf, currentProgress, askFeedback))
          }else{
            dispatch(updateProgress(response.data[0].id, currentProgress, askFeedback))
          }
        }else{
          //if progress is less than current progress
        }
        if(!update){
          dispatch(setProgram(response.data[0].acf));
          dispatch(setProgramID(response.data[0].id));
          dispatch(setCurrentDay(progress));
          dispatch(getExerciseRecord(response.data[0].id));
        }
      }
    }).catch((error)=> {
      console.log(error.response);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }
}
//This function update the current progress along side implementing Deload Algorithm for fifth week.
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
    let token = sessionStorage.getItem('token');
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,{
      status: "publish",
      fields: program
    }, {
      headers:{ Authorization: "Bearer" + token }
    }).then((response) => {
      const currentDay = parseInt(response.data.acf.progress,10);
      dispatch(setProgram(response.data.acf));
      dispatch(setProgramID(response.data.id));
      dispatch(setCurrentDay(currentDay));
      dispatch(getExerciseRecord(response.data.id));
    }).catch((error) => {
      console.log(error.response)
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })//end catch
  })//ends dispatch return
}//ends function

//This function update the current progess of the program.
export function updateProgress(programID, progress, ask_feedback){
  return((dispatch: Function) => {
    let token = sessionStorage.getItem('token');
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,{
      status: "publish",
      fields: {
        progress: progress,
        ask_feedback: ask_feedback,
        feedback_value: 0,
        finish_for_day: false
      }
    }, {
      headers:{ Authorization: "Bearer" + token }
    }).then((response) => {
      const currentDay = parseInt(response.data.acf.progress,10);
      dispatch(setProgram(response.data.acf));
      dispatch(setProgramID(response.data.id));
      dispatch(setCurrentDay(currentDay));
      dispatch(getExerciseRecord(response.data.id));
    }).catch((error) => {
      console.log(error.response)
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  })//ends return dispatch
}

//Trigger when user submit the difficultly feedback after completion of the days
export function updateDailyFeedBack(programID, program, value) {
  return((dispatch: Function) => {
    const currentWeek = Math.ceil(program.progress / program.days);
    let currentDay = program.progress - ((currentWeek -1 ) * program.days)
    let needUpdate = false;
    let valueChanges = 0;
    let feedbackValue = value;
    let progress = parseInt(program.progress,10);

    if(program.ask_feedback === true){
      currentDay = currentDay === 1 ? 3 : (currentDay - 1);
      feedbackValue = 0;
    }
    if(program.finish_for_day === true){
      progress += 1;
      program.progress= progress;
    }
    if(value === 3){
      needUpdate = true;
      valueChanges = -1;
    }else if(value === 1){
      needUpdate = true;
      valueChanges = 1;
    }
    if(needUpdate){
      let dayIndex = program.exercises.findIndex( i => { return i.day === currentDay.toString() });
      program.exercises[dayIndex].exercise_list.map((data, key) => {
        if(parseInt(data.feedback,10) === currentWeek+1){
          let sets = parseInt(program.exercises[dayIndex].exercise_list[key].sets, 10)
          program.exercises[dayIndex].exercise_list[key].sets = sets+valueChanges
        }
        return null;
      })
    }
    program.feedback_value =feedbackValue;
    program.ask_feedback = false;
    program.finish_for_day = false;
    let token = sessionStorage.getItem('token');
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`, {
      status: "publish",
      fields: program
    }, {
      headers:{ Authorization: "Bearer" + token }
    }).then((response)=> {
      dispatch(setProgram(response.data.acf));
      dispatch(setProgramID(response.data.id));
      dispatch(setCurrentDay(progress));
      dispatch(setDiffFinished(false));
    }).catch((error) => {
      console.log(error.response);
      if (error.response) {
        dispatch(setDiffFinished(false));
        dispatch(catchError(error.response.data.message));
      } else {
        dispatch(setDiffFinished(false));
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  })
}

//This function use to fetch the exercise record for the current program.
export function getExerciseRecord(programID){
  return(dispatch: Function) => {
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/record?filter[meta_key]=program_id&filter[meta_value]=${programID}`)
    .then((response) => {
      if(response.data.length === 0){
        console.log("record not found");
        dispatch(redirectToQuestionnaire(true));
        setTimeout(function(){
          dispatch(redirectToQuestionnaire(false));
        },2000);
      }else{
        dispatch(setExerciseRecord(response.data[0].acf));
        dispatch(setExerciseID(response.data[0].id))
      }
    }).catch((error)=> {
      console.log(error.response);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }//end return dispatch function
}

//This function use to update the program when user change the workout
export function selectWorkout(listIndex, workoutReducers, selectedExercise) {
  return(dispatch: Function) => {
    let id = workoutReducers.programID;
    let { dayIndex }= workoutReducers;
    let program = JSON.parse(JSON.stringify(workoutReducers.program));
    program.exercises[dayIndex].exercise_list[listIndex].workout = selectedExercise.name;
    program.exercises[dayIndex].exercise_list[listIndex].progression_model = selectedExercise.progression_model;
    if(selectedExercise.repetition !== "n/a"){
      program.exercises[dayIndex].exercise_list[listIndex].reps = selectedExercise.repetition;
    }
    dispatch(setProgram(program));
    dispatch(setWorkoutList(null));
    let token = sessionStorage.getItem('token');
    return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${id}`,
      {
        status: "publish",
        fields: program
      }, {
        headers:{ Authorization: "Bearer" + token }
      }).then((response)=> {
        dispatch(setProgram(response.data.acf));
      }).catch((error)=> {
        console.log(error.response);
        if(error.response){
          dispatch(catchError(error.response.data.message));
        }else{
          dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
        }
      })
    }
  }

  //This function is to fetch the list of available workout
  export function fetchWorkoutList(code) {
    return(dispatch: Function) => {
      return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/exercise?filter[meta_key]=code&filter[meta_value]=${code}`)
      .then((response) => {
        dispatch(setWorkoutList(response.data[0].acf));
      }).catch((error) => {
        console.log(error.response);
        if(error.response){
          dispatch(catchError(error.response.data.message));
        }else{
          dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
        }
      })
    }
  }
  //This function update the server when user select keep button in workout
  export function keepWorkout(listIndex, workoutReducers){
    return(dispatch: Function) => {
      dispatch(isClickedKeep(true));
      let id = workoutReducers.programID;
      let {dayIndex} = workoutReducers;
      let program = JSON.parse(JSON.stringify(workoutReducers.program));
      program.exercises[dayIndex].exercise_list[listIndex].is_saved = true;
      let token = sessionStorage.getItem('token');
      return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${id}`,
        {
          status: "publish",
          fields: program
        }, {
          headers:{ Authorization: "Bearer" + token }
        }).then((response)=> {
          console.log("Respone",response);
          dispatch(setProgram(response.data.acf));
          dispatch(isClickedKeep(false));
        }).catch((error)=> {
          console.log(error);
          dispatch(isClickedKeep(false));
          dispatch(setProgram(workoutReducers.program));
          if(error.response){
            dispatch(catchError(error.response.data.message));
          }else{
            dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
          }
        })
      }
    }

    //This function use to save the exercise record the database name record
    export function saveExerciseData(recordID, day, name, code, heading, weight, sets, reps, record) {
      return(dispatch: Function) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];
        let temp, daily_record;
        //Calculate the current date
        let currentDate = new Date();
        let todayDay = currentDate.getDate();
        let todayMonth = monthNames[currentDate.getMonth()];
        let todayYear = currentDate.getFullYear();
        let date = `${todayDay} ${todayMonth} ${todayYear}`;

        if(record.daily_record){
          daily_record = record.daily_record;
            let dayIndex = record.daily_record.findIndex( i => { return i.day === day.toString() });
            if(dayIndex >= 0){
              let dataIndex = record.daily_record[dayIndex].data.findIndex( i => { return (i.code === code.toString() && i.name === name) });
              if(dataIndex >= 0){
                temp = { sets: sets, reps: reps, weight: weight }
                daily_record[dayIndex].data[dataIndex].data.push(temp);
              }else{//dataIndex >= 0
                temp = {code: code, name: name, heading: heading, data: [ { sets: sets, reps: reps, weight: weight }]}
                daily_record[dayIndex].data.push(temp);
              }
            }else{//dayIndex >= 0
              temp = {day: day, date: date, data: [ {code: code, name: name, heading: heading, data: [
                { sets: sets, reps: reps, weight: weight }]}]}
                daily_record.push(temp);
              }
            }else{
              daily_record = [{ day: day, date: date, data: [ {code: code, name:name, heading: heading, data: [
                { sets: sets, reps: reps, weight: weight }]}]}
              ]
            }
            let token = sessionStorage.getItem('token');
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/record/${recordID}`,
              {
                status: "publish",
                fields: {
                  daily_record: daily_record
                }
              }, {
                headers:{ Authorization: "Bearer" + token }
              })
              .then((response)=> {
                  dispatch(setExerciseRecord(response.data.acf));
                  dispatch(savingExercise(false));
              }).catch((error)=> {
                console.log(error.response);
                dispatch(savingExercise(false));
                if(error.response){
                  dispatch(catchError(error.response.data.message));
                }else{
                  dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
                }
              })
          }//ends return dispatch
        }//ends functions saveExerciseData

        //This function use to update the personal Best when user hits his personal best
        export function updatePersonalBest (program, programID, dayIndex, index, value){
          return(dispatch:Function) => {
            program.exercises[dayIndex].exercise_list[index].personal_best = value;
            let token = sessionStorage.getItem('token');
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,
              {
                status: "publish",
                fields: program
              },{
                headers:{ Authorization: "Bearer" + token }
              }).then((response)=> {
                dispatch(setProgram(response.data.acf));
              }).catch((error)=> {
                console.log(error.response);
                if(error.response){
                  dispatch(catchError(error.response.data.message));
                }else{
                  dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
                }
              })
          }
        }

        //This function update the reps and weight according to week to week changes algorithm
        export function updateRepsAndWeight (program, programID, dayIndex, index, reps, weight){
          return(dispatch:Function) => {
            program.exercises[dayIndex].exercise_list[index].weight = weight;
            program.exercises[dayIndex].exercise_list[index].reps = reps;
            let token = sessionStorage.getItem('token');
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,
              {
                status: "publish",
                fields: program
              }, {
                headers:{ Authorization: "Bearer" + token }
              }).then((response)=> {
                dispatch(setProgram(response.data.acf));
              }).catch((error)=> {
                console.log(error.response);
                if(error.response){
                  dispatch(catchError(error.response.data.message));
                }else{
                  dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
                }
              })
          }
        }
        //This function update the reps for home exercise according to week to week changes algorithm
        export function updateReps (program, programID, dayIndex, index, reps){
          return(dispatch:Function) => {
            program.exercises[dayIndex].exercise_list[index].reps = reps;
            let token = sessionStorage.getItem('token');
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,
              {
                status: "publish",
                fields: program
              }, {
                headers:{ Authorization: "Bearer" + token }
              }).then((response)=> {
                dispatch(setProgram(response.data.acf));
              }).catch((error)=> {
                console.log(error.response);
                if(error.response){
                  dispatch(catchError(error.response.data.message));
                }else{
                  dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
                }
              })
          }
        }

        //This function use to mark finish_for_day as true when user click complete workout button after completion of exercise
        export function completeWorkout(programID){
          return(dispatch:Function) => {
            let token = sessionStorage.getItem('token');
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,
              {
                status: "publish",
                fields: {
                  finish_for_day: true
                }
              },{
                headers:{ Authorization: "Bearer" + token }
              }).then((response)=> {
                dispatch(setProgram(response.data.acf));
              }).catch((error)=> {
                console.log(error.response);
                if(error.response){
                  dispatch(catchError(error.response.data.message));
                }else{
                  dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
                }
              })
          }
}
        export function setDiffFinished ( isDiffFinished: Boolean) {
          return {
            type: "AVA_ACT_DIFF",
            payload: isDiffFinished
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

        export function setProgramStartDate (date: Date) {
          return {
            type: "SET_PROGRAM_START_DATE",
            payload: date
          }
        }

        export function setExerciseRecord(record: Object) {
          return {
            type: "SET_EXERCISE_RECORD",
            payload: record
          }
        }

        export function setExerciseID(id: Number) {
          return {
            type: "SET_EXERCISE_ID",
            payload: id
          }
        }
        export function savingExercise(isSaving: Boolean) {
          return{
            type: "SAVING_EXERCISE",
            payload: isSaving
          }
        }
        export function redirectToQuestionnaire(value: Boolean) {
          return {
            type: "REDIRECT_TO_QUESTIONNAIRE",
            payload: value
          }
        }

        export function isClickedKeep(value: Boolean) {
          return {
            type: "IS_CLICKED_KEEP",
            payload: value
          }
        }

        export function settingCurrentDay(value: Boolean) {
            return {
              type: "IS_SETTING_CURRENT_DAY",
              payload: value
            }
        }

        export function catchError(error: string){
          return{
            type: "CATCH_ERROR",
            payload: error
          }
        }
        export function removeError(){
          return{
            type: "REMOVE_ERROR",
            payload: null
          }
        }
