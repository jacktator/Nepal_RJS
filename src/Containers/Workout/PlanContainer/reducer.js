let DefaultState = {
}

const PlanReducers =(state: Object= DefaultState, action: Function) => {
  switch (action.type) {
    case "SET_PROGRAM_NAME":
    return {
      ...state, goal: action.payload
    }
    case "SET_DAYS":
    return {
      ...state, days: action.payload
    }
    default:
      return state;
  }
}

export default PlanReducers;
