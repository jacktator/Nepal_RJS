let DefaultState = {
  isInitializing: true,
  isUploading: false,
  error: {
    hasError: false,
    message:''
  }
}

const RehabReducers = (state: Object = DefaultState, action: Function) => {
  let error;
  switch (action.type) {
    case "SET_REHAB":
      return {
        ...state, rehab: action.payload
      }

    case "SET_REHAB_ID" :
      return {
          ...state, rehabID: action.payload
      }

    case "SET_REHAB_LIST" :
      return {
        ...state, rehabList: action.payload
      }

    case "UPLOADING_TO_SERVER" :
      return {
        ...state, isUploading: action.payload
      }

    case "SET_INITIALISATION" :
      return {
        ...state, isInitializing: action.payload
      }

    case "CATCH_ERROR":
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

export default RehabReducers;
