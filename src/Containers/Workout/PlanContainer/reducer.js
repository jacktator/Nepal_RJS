let DefaultState = {
  workoutProgram:
  workoutDuration:
  percentage:
}

const PlanReducers =(state: Object= DefaultState, action: Function) => {
  let fields = null;
  switch (action.type) {

    // case "CHANGE_NAME":
    // return {
    //   ...state, nick_name: action.payload
    // }

    default:
      return state;
  }
}

export default connect (mapStateToProps, matchDispatchToProps)(PlanReducers);
