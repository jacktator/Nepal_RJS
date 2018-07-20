let DefaultState = {
  error: {
    hasError: false,
    message: ''
  }
}

const ErrorHandler = (state: Object= DefaultState, action: Function) => {
  let error;
  switch(action.type) {
    case "ADD_ERROR":
      error = {...state.error};
      error['hasError']= true;
      error['message'] = action.payload;
      return {
        ...state, error
      }
    case "REMOVE_ERROR":
      error = {...state.error};
      error['hasError']= false;
      error['message'] = action.payload;
      return {
        ...state, error
      }
    default:
      return state; 
  }
}

export default ErrorHandler;
