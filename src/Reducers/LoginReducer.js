//this file is for getting the email and password

let DefaultState=
  {
    email:'',
    password:'',
    token: '',
    status:false,
  }

const LoginReducer = (state=DefaultState, action)=>{
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
    console.log(action.payload)
    return {
      ...state, status: action.payload
    }
  }

  return state;
}
export default LoginReducer;
