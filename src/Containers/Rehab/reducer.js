let DefaultState = {
  redirectToWeeklyQuestionnaire: false,
  isInitializing: true,
  isUploading: false,
  isFetchingRehabRecord: false,
  injury_management: null,
  posture_correction: null,
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

    case "SET_REHAB_RECORD" :
      return {
        ...state, rehabRecord: action.payload
      }

    case "SET_REHAB_RECORD_ID" :
      return {
        ...state, rehabRecordID: action.payload
      }

    case "SET_REHAB_LIST" :
      return {
        ...state, rehabList: action.payload
      }

    case "IS_FETCHING_REHAB_RECORD" :
      return {
        ...state, isFetchingRehabRecord: action.payload
      }

    case "UPLOADING_TO_SERVER" :
      return {
        ...state, isUploading: action.payload
      }

    case "SET_INITIALISATION" :
      return {
        ...state, isInitializing: action.payload
      }

    case "REDIRECT_TO_QUESTIONNARIE" :
      return {
        ...state, redirectToWeeklyQuestionnaire: action.payload
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

      case "ADD_INJURY_MANAGEMENT" :
      return {
        ...state, injury_management: action.payload
      }

      case "ADD_POSTURE_CORRECTION" :
      return {
        ...state, posture_correction: action.payload
      }
    default:
      return state;

  }
}

export default RehabReducers;
