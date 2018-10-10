//this file is for getting the email and password
//@flow

let DefaultState=
  {
    // email:'boy@test.com',
    // password:12345678,
    email:'',
    password:'',
    token: '',
    status: true,
    error: {
      hasError: false,
      message: ''
    },
    isAuthenticated: false,
    isInvalidToken: false,
  }

const LoginDetailsReducers = (state: Object=DefaultState, action: Function)=>{
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
  else if (action.type==="UPDATE_TOKEN"){
    return {
      ...state, token: action.payload
    }
  }
  else if (action.type==="IS_AUTHENTICATED"){
    return {
      ...state, isAuthenticated: action.payload
    }
  }
  else if (action.type==="TEST"){
    return {
      ...state, status: action.payload
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
  else if(action.type==="SET_TOKEN_ERROR"){
    return {
      ...state, isInvalidToken: action.payload
    }
  }
    return state;
}
export default LoginDetailsReducers;
