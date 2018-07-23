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
  switch (action.type) {
    case "KEEP_WARMUP":
      let warmUpExerciseArray = [...state.warmUpExerciseArray]
      index = state.warmUpExerciseArray.findIndex(i => { return i.value === action.payload })
      warmUpExerciseArray[index].isSaved= true;
      return {
        ...state, warmUpExerciseArray
      }

    case "KEEP_WORKOUT":
      let workOutExerciseArray = [...state.workOutExerciseArray]
      index = state.workOutExerciseArray.findIndex(i=> { return i.value === action.payload})
      workOutExerciseArray[index].isSaved= true;
      return {
        ...state, workOutExerciseArray
      }

    default:
    return state;
  }
}

export default WorkOutReducers;
