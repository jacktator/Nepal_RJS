// @flow
let DefaultState = {
  error: {
    hasError: false,
    message: ''
  }
}

const ErrorHandlerReducers =(state: Object= DefaultState, action: Function) => {
  
  switch (action.type) {
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
export default QuestionnaireReducers;
