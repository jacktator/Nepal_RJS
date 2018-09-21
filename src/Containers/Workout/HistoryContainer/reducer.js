let DefaultState = {
  error:{
    hasError: false,
    message:''
  }
}
const HistoryReducers = (state:Object=DefaultState, action:Function)=> {
  let error ;
  switch(action.type){
    case "SET_HISTORY":
    return {
      ...state, history: action.payload
    }
    case "SET_PROGRAM":
    return {
      ...state, program: action.payload
    }
    case "SET_PROGRAM_ID":
    return {
      ...state, programID: action.payload
    }
    case "SET_CURRENT_WEEK" :
    return {
      ...state, currentWeek: action.payload
    }

    case "SET_CURRENT_DAY" :
    return {
      ...state, currentDay: action.payload
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
    return state
  }
}

export default HistoryReducers;
