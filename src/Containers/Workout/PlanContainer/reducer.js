let DefaultState = {
  days: 3,
  progress: 1,
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

export default PlanReducers;
