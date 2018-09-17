let DefaultState = {
}
const HistoryReducers = (state:Object=DefaultState, action:Function)=> {
  switch(action.type){
    case "SET_HISTORY":
    return {
      ...state, history: action.payload
    }

    default:
    return state
  }
}

export default HistoryReducers;
