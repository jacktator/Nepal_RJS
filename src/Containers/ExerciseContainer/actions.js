

export function displayExerciseName (exerciseName: string) {
  return{
    type: "DISPLAY_EXERCISE_NAME",
    payload: exerciseName,
  }
}

export function displayExerciseNumber (exerciseNumber: number) {
  return{
    type: "DISPLAY_EXERCISE_NUMBER",
    payload: exerciseNumber.toString(),
  }
}

export function displayExerciseTotal (exerciseTotal: number) {
  return{
    type: "DISPLAY_EXERCISE_TOTAL",
    payload: exerciseTotal.toString(),
  }
}

export function displaySets (sets: number) {
  return{
    type: "DISPLAY_SETS",
    payload: sets.toString(),
  }
}

export function displayReps (reps: number) {
  return{
    type: "DISPLAY_REPS",
    payload: reps.toString(),
  }
}

export function displayWeight (weight: number) {
  return{
    type: "DISPLAY_WEIGHT",
    payload: weight.toString(),
  }
}

export function displayVideo (video: string) {
  return{
    type: "DISPLAY_VIDEO",
    payload: video.toString(),
  }
}

export function displayVideoDesc (videoDesc: string) {
  return{
    type: "DISPLAY_VIDEO_DESC",
    payload: videoDesc.toString(),
  }
}

export function addLogNum (numbers: number) {
  return{
    type: "ADD_LOG_NUMBER",
    payload: numbers.toString(),
  }
}

export function addLogTick (tick: boolean) {
  return{
    type: "ADD_LOG_TICK",
    payload: tick
  }
}

export function addLogTrophy ( trophy:boolean ){
  return{
    type:"ADD_LOG_TROPHY",
    payload:trophy
  }
}

export function addLogWeight ( weight :number ){
  return{
    type:"ADD_LOG_WEIGHT",
    payload:weight.toString()
  }
}

export function addLogReps ( reps:number ){
  return{
    type:"ADD_LOG_REPS",
    payload:reps.toString()
  }
}

export function addLogCurrent ( current:boolean ){
  return{
    type:"ADD_LOG_CURRENT",
    payload: current
  }
}
