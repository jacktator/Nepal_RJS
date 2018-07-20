let DefaultState = {
  error: {
    hasError: false,
    message: ''
  }
}

const ErrorHandler = (state: Object= DefaultState, action: Function) => {
  switch(action.type) {
    case "ADD_ERROR":
      let error = {...state.error};
      error['hasError']= true;
      error['message'] = action.payload;
      return {
        ...state, error
      }
    case "REMOVE_ERROR":
      let error = {...state.error};
      error['hasError']= false;
      error['message'] = action.payload;
      return {
        ...state, error
      }
  }
}
