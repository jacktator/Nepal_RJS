//this file is for getting the email and password
//@flow

let DefaultState=
  {
    email:'boy@test.com',
    password:12345678,
    token: '',
    status: true,
    error:null,
  }

const LoginDetailsReducers = (state: Object=DefaultState, action: Function)=>{
  if(action.type==="ADD_EMAIL"){
    //console.log("add email: "+ action.payload)
    return {
      ...state, email: action.payload
    }
  }

  else if (action.type==="ADD_PASSWORD"){
    //console.log("add password: "+ action.payload)
    return {
      ...state, password: action.payload
    }
  }
  else if (action.type==="UPDATE_TOKEN"){
    //console.log("add token: "+ action.payload)
    return {
      ...state, token: action.payload
    }
  }
  else if (action.type==="IS_AUTHENTICATED"){
    //console.log(action.payload)
    return {
      ...state, status: action.payload
    }
  }
  else if (action.type==="TEST"){
    //console.log(action.payload)
    return {
      ...state, status: action.payload
    }
  }
  else if (action.type==="CATCH_ERROR"){
    //console.log("add token: "+ action.payload)
    return {
      ...state, error: action.payload
    }
  }

  return state;
}
export default LoginDetailsReducers;
