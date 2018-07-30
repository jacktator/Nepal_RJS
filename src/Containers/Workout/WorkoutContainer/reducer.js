// @flow
let DefaultState = {
  warmUpExerciseArray: [
    {value: 0, isSaved: false, name: "knee Warmup"},
    {value: 1, isSaved: false, name: "Chest Warmup"}
  ],
  workOutExerciseArray: [
    {value: 0, isSaved: false, name: "knee WorkOut"},
    {value: 1, isSaved: false, name: "Chest WorkOut"},
  ]
}

const WorkOutReducers = (state: Object= DefaultState, action: Function) => {
  let index = null;
  let workOutExerciseArray, warmUpExerciseArray;
  switch (action.type) {
    case "KEEP_WARMUP":
      warmUpExerciseArray = [...state.warmUpExerciseArray]
      index = state.warmUpExerciseArray.findIndex(i => { return i.value === action.payload })
      warmUpExerciseArray[index].isSaved= true;
      return {
        ...state, warmUpExerciseArray
      }

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
      case "UPDATE_WARMUP":
        warmUpExerciseArray = [...state.warmUpExerciseArray]
        index = state.warmUpExerciseArray.findIndex(i=> { return i.value === action.payload[0]})
        warmUpExerciseArray[index].value= action.payload[1];
        return {
          ...state, warmUpExerciseArray
        }

    default:
    return state;
  }
}

export default WorkOutReducers;
