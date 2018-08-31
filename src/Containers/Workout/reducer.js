let DefaultState = {
  id: null,
  days: 3,
  progress: 1,
}

const WorkoutReducers =(state: Object= DefaultState, action: Function) => {
  switch (action.type) {
    case "SET_PROGRAM":
    return {
      ...state, program: action.payload
    }
    case "SET_PROGRAM_ID":
    return {
      ...state, id: action.payload
    }

    case "SET_WORKOUT_LIST" :
    return {
      ...state, listExercise: action.payload
    }

    case "SET_PROGRAM_NAME":
    return {
      ...state, goal: action.payload
    }
    case "SET_DAYS":
    return {
      ...state, days: action.payload
    }
    case "SET_EXERCISES":
    return {
      ...state, exercises: action.payload
      }
    case "SET_Progress":
      return {
        ...state, progress: action.payload
      }
    default:
      return state;
  }
}

export default WorkoutReducers;
