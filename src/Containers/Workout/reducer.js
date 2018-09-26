let DefaultState = {
  dayIndex: null,
  redirectToQuestionnaire: false,
  error:{
    hasError:false,
    message:''
  }
}

const WorkoutReducers =(state: Object= DefaultState, action: Function) => {
  let error;
  switch (action.type) {
    case "SET_PROGRAM":
    return {
      ...state, program: action.payload
    }
    case "SET_PROGRAM_ID":
    return {
      ...state, programID: action.payload
    }

    case "SET_PROGRAM_START_DATE":
    return {
      ...state, programStartDate: action.payload
    }

    case "SET_WORKOUT_LIST" :
    return {
      ...state, listExercise: action.payload
    }

    case "SET_DAY_iNDEX" :
    return {
      ...state, dayIndex: action.payload
    }

    case "SET_CURRENT_DAY" :
    return {
      ...state, currentDay: action.payload
    }

    case "SET_EXERCISE_RECORD" :
    return {
      ...state, record: action.payload
    }

    case "SET_EXERCISE_ID" :
    return {
      ...state, recordID: action.payload
    }
    
    case "REDIRECT_TO_QUESTIONNAIRE" :
    return {
      ...state, redirectToQuestionnaire: action.payload
    }

    case "CATCH_ERROR":
    error = {...state.error};
    error['hasError']= true;
    error['message'] = action.payload;
    return {
      ...state, error
    }
    case "REMOVE_ERROR":
    error = {...state.error};
    error['hasError']= false;
    error['message'] = action.payload;
    return {
      ...state, error
    }
    default:
      return state;
  }
}

export default WorkoutReducers;
