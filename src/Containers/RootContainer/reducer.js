

let DefaultState={
  check: false,
}

const RootReducers = (state: Object = DefaultState, action: Function )=>{
  if(action.type==="CHECK_CHANGE"){
    return{
      ...state, check: action.payload
    }
  }

  return state;
}

export default RootReducers;
