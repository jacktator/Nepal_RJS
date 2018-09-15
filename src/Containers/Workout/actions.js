import axios from 'axios';

//This function used to initialize the program to the redux during loading plan page
export function getProgram(){
  return(dispatch: Function) => {
    return axios.get("https://nepal.sk8tech.io/wp-json/wp/v2/program?filter[posts_per_page]=1")
    .then((response)=> {
      const progress = response.data[0].acf.progress;
      const days = response.data[0].acf.days;
      const feedbackValue = response.data[0].acf.feedback_value;
      const currentWeek = Math.ceil(progress / days);
      const currentDay = progress - ((currentWeek -1 ) * days)

      const programStartDate = new Date(response.data[0].date);
      const currentDate = new Date().getTime();
      let difference = currentDate - programStartDate;
      let daysDifference = Math.floor(difference/1000/60/60/24) + 1;
      let update = false;
      const runningWeek = Math.ceil(daysDifference/7)
      const dayCountForRunningWeek =  daysDifference - (runningWeek-1) * 7 ;

      if(dayCountForRunningWeek <= days){
        let currentProgress = (runningWeek-1) * days + dayCountForRunningWeek;
        if(parseInt(progress,10) !== currentProgress){
          update = true;
          const askFeedback = parseInt(feedbackValue, 10) ===0 ? true : false
          dispatch(updateProgress(response.data[0].id, currentProgress, askFeedback))
        }
      }else{
        alert("Need to add logic for off days in action line 30")
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

//This function update the current progess of the program.
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
      const feedbackValue = response.data.acf.feedback_value;
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
  })
}

//Trigger when user submit the difficultly feedback after completion of the days
export function updateDailyFeedBack(programID, program, feedbackValue) {
  return((dispatch: Function) => {
    const currentWeek = Math.ceil(program.progress / program.days);
    let currentDay = program.progress - ((currentWeek -1 ) * program.days)
    let needUpdate = false;
    let valueChanges = 0;
    if(program.ask_feedback === true){
      currentDay = currentDay === 1 ? 3 : (currentDay - 1)
    }
    if(feedbackValue === 3){
      needUpdate = true;
      valueChanges = -1;
    }else if(feedbackValue === 1){
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
      })
    }
    program.feedback_value =0;
    program.ask_feedback = false;
    program.finish_for_day = false;
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`, {
      status: "publish",
      fields: program
    }).then((response)=> {
      dispatch(setProgram(response.data.acf));
    }).catch((error) => {
      alert("error")
    })
  })
}

export function getExerciseRecord(programID){
  return(dispatch: Function) => {
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/record?filter[meta_key]=program_id&filter[meta_value]=${programID}`)
    .then((response) => {
      dispatch(setExerciseRecord(response.data[0].acf));
      dispatch(setExerciseID(response.data[0].id))
    }).catch((error)=> {
      console.log(error);
    })
  }//end return dispatch function
}

//This function use to update the program when user change the workout
export function selectWorkout(listIndex, workoutReducers, selectedExercise) {
  return(dispatch: Function) => {
    let token = localStorage.getItem('token');
    let id = workoutReducers.programID;
    let { program, dayIndex } = workoutReducers;
    program.exercises[dayIndex].exercise_list[listIndex].workout = selectedExercise.name;
    program.exercises[dayIndex].exercise_list[listIndex].progression_model = selectedExercise.progression_model;
    dispatch(setProgram(program));
    dispatch(setWorkoutList(null));
    return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${id}`,
      {
        status: "publish",
        fields: program
      })
      .then((response)=> {
        dispatch(setProgram(response.data.acf));
      }).catch((error)=> {
        alert("error");
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
        console.log(error);
      })
    }
  }
  //This function update the server when user select keep button in workout
  export function keepWorkout(listIndex, workoutReducers){
    let token = localStorage.getItem('token');
    return(dispatch: Function) => {
      let id = workoutReducers.programID;
      let {program, dayIndex} = workoutReducers;
      program.exercises[dayIndex].exercise_list[listIndex].is_saved = true;
      dispatch(setProgram(program));
      return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${id}`,
        {
          status: "publish",
          fields: program
        }).then((response)=> {
          dispatch(setProgram(response.data.acf));
        }).catch((error)=> {
          console.log(error);
        })
      }
    }
    export function saveExerciseData(recordID, week, day, name, code, weight, sets, reps, record) {
      return(dispatch: Function) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];
        let temp, daily_record;
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = monthNames[currentDate.getMonth()];
        let year = currentDate.getFullYear();
        let date = `${day} ${month} ${year}`;
        if(record.daily_record){
          daily_record = record.daily_record;
            let dayIndex = record.daily_record.findIndex( i => { return i.day === day.toString() });
            if(dayIndex >= 0){
              let dataIndex = record.daily_record[dayIndex].data.findIndex( i => { return i.code === code.toString() });
              if(dataIndex >= 0){
                temp = { sets: sets, reps: reps, weight: weight }
                daily_record[dayIndex].data[dataIndex].data.push(temp);
              }else{//dataIndex >= 0
                temp = {code: code, name: name, data: [ { sets: sets, reps: reps, weight: weight }]}
                daily_record[dayIndex].data.push(temp);
              }
            }else{//dayIndex >= 0
              temp = {day: day, date: date, data: [ {code: code, name: name, data: [
                { sets: sets, reps: reps, weight: weight }]}]}
                daily_record.push(temp);
              }
            }else{
              daily_record = [{ day: day, date: date, data: [ {code: code, data: [
                { sets: sets, reps: reps, weight: weight }]}]}
              ]
            }
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/record/${recordID}`,
              {
                status: "publish",
                fields: {
                  daily_record: daily_record
                }
              })
              .then((response)=> {
                  dispatch(setExerciseRecord(response.data.acf));
              }).catch((error)=> {
                console.log(error);
              })
          }//ends return dispatch
        }//ends functions saveExerciseData

        export function updatePersonalBest (program, programID, dayIndex, index, value){
          return(dispatch:Function) => {
            program.exercises[dayIndex].exercise_list[index].personal_best = value;
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,
              {
                status: "publish",
                fields: program
              })
              .then((response)=> {
                dispatch(setProgram(response.data.acf));
              }).catch((error)=> {
                console.log(error);
              })
          }
        }


        export function updateRepsAndWeight (program, programID, dayIndex, index, reps, weight){
          return(dispatch:Function) => {
            program.exercises[dayIndex].exercise_list[index].weight = weight;
            program.exercises[dayIndex].exercise_list[index].reps = reps;
            return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/program/${programID}`,
              {
                status: "publish",
                fields: program
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
