let DefaultState={

  exerciseName:"DeadLift",
  exerciseNumber: "1",
  exerciseTotal: "6",

  sets: "3",
  reps: "10",
  weight: "12",
  video: "-4qRntuXBSc",
  videoDescription:
                    'Your feet should be spaced hip-width apart with your grip just outside your legs.'+
                    'Use an overhand grip.Your back should be flat—neutral spine—from start to finish. Your shoulders should'+
                    'be back and down. The bar should remain in contact with your legs for the entire range of motion'+
                    'Your hips and knees should move together to transfer the bar from the ground to an upper-thigh, locked position.',

  exerciseLog:
    {
    number:"1",
    tick: true,
    trophy: false,
    weight: "10",
    reps: "10",
    current: true,
  },

}

const ExerciseReducers = (state: Object= DefaultState, action: Function) => {

  let exerciseLog = null;
  switch (action.type) {

    case "DISPLAY_EXERCISE_NAME":
    return {
      ...state,  exerciseName: action.payload
    }

    case "DISPLAY_EXERCISE_NUMBER":
    return {
      ...state,  exerciseNumber: action.payload
    }

    case "DISPLAY_EXERCISE_TOTAL":
    return {
      ...state,  exerciseTotal: action.payload
    }

    case "DISPLAY_SETS":
    return {
      ...state,  sets: action.payload
    }

    case "DISPLAY_REPS":
    return {
      ...state,  reps: action.payload
    }

    case "DISPLAY_WEIGHT":
    return {
      ...state,  weight: action.payload
    }

    case "DISPLAY_VIDEO":
    return {
      ...state,  video: action.payload
    }

    case "DISPLAY_VIDEO_DESC":
    return {
      ...state,  videoDescription: action.payload
    }



    case "ADD_LOG_NUMBER" :
    exerciseLog = {...state.exerciseLog};
    exerciseLog['number']= action.payload
    return {
      ...state, exerciseLog
    }

    case "ADD_LOG_TICK" :
    exerciseLog = {...state.exerciseLog};
    exerciseLog['tick']= action.payload
    return {
      ...state, exerciseLog
    }

    case "ADD_LOG_TROPHY" :
    exerciseLog = {...state.exerciseLog};
    exerciseLog['trophy']= action.payload
    return {
      ...state, exerciseLog
    }

    case "ADD_LOG_WEIGHT" :
    exerciseLog = {...state.exerciseLog};
    exerciseLog['weight']= action.payload
    return {
      ...state, exerciseLog
    }

    case "ADD_LOG_REPS" :
    exerciseLog = {...state.exerciseLog};
    exerciseLog['reps']= action.payload
    return {
      ...state, exerciseLog
    }

    case "ADD_LOG_CURRENT" :
    exerciseLog = {...state.exerciseLog};
    exerciseLog['current']= action.payload
    return {
      ...state, exerciseLog
    }

    default: // need this for default case
    return state
  }
}

export default ExerciseReducers;
