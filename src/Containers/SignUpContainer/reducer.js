//this file is for getting the email and password

let DefaultState=
  {
    username:'',
    email:'',
    password:'',
    fetch:'',
    error: {
      hasError: false,
      message: ''
    },
  }

const SignUpReducers = (state=DefaultState, action)=>{
  let error;
  if(action.type==="ADD_EMAIL"){
    return {
      ...state, email: action.payload
    }
  }

  else if (action.type==="ADD_PASSWORD"){
    return {
      ...state, password: action.payload
    }
  }
  else if (action.type==="ADD_USERNAME"){
    return {
      ...state, username: action.payload
    }
  }
  else if (action.type==="FETCH_RESPONSE"){
    return {
      ...state, fetch: action.payload
    }
  }
  else if (action.type==="CATCH_ERROR"){
    error = {...state.error};
    error['hasError']= true;
    error['message'] = action.payload;
    return {
      ...state, error
    }
  }
  else if (action.type==="REMOVE_ERROR"){
    error = {...state.error};
    error['hasError']= false;
    error['message'] = action.payload;
    return {
      ...state, error
    }
  }
  return state;
}
export default SignUpReducers;
