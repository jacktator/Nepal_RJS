let DefaultState = {
}
const HistoryReducers = (state:Object=DefaultState, action:Function)=> {
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
    default:
    return state
  }
}

export default HistoryReducers;
