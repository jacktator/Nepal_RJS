

let DefaultState={
  check: false,
  justRegistered: false
}

const RootReducers = (state: Object = DefaultState, action: Function )=>{

  if(action.type==="CHECK_CHANGE"){
    return{
      ...state, check: action.payload
    }
  }
  if(action.type === "CHECK_REGISTER"){
    return{
      ...state, justRegistered: action.payload
    }
  }

  return state;
}

export default RootReducers;
