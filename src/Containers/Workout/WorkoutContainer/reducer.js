// @flow
let DefaultState = {
  workOutExerciseArray: [
    {value: 0, isSaved: false, name: "knee WorkOut"},
    {value: 1, isSaved: false, name: "Chest WorkOut"},
  ]
}

const WorkoutReducers = (state: Object= DefaultState, action: Function) => {
  let index = null;
  let workOutExerciseArray;
  switch (action.type) {

    case "KEEP_WORKOUT":
      workOutExerciseArray = [...state.workOutExerciseArray]
      index = state.workOutExerciseArray.findIndex(i=> { return i.value === action.payload})
      workOutExerciseArray[index].isSaved= true;
      return {
        ...state, workOutExerciseArray
      }

    case "UPDATE_EXERCISE":
      workOutExerciseArray = [...state.workOutExerciseArray]
      index = state.workOutExerciseArray.findIndex(i=> { return i.value === action.payload[0]})
      workOutExerciseArray[index].value= action.payload[1];
      return {
        ...state, workOutExerciseArray
      }

    default:
    return state;
  }
}

export default WorkoutReducers;
