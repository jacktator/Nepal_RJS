
let DefaultState=
  {
    email:'',
    password:'',
  }

const LoginReducer = (state=DefaultState, action)=>{
  if(action.type==="ADD_EMAIL"){
    console.log("add email: "+ action.payload)
    return {
      ...state, email: action.payload
    }

  }
  else if (action.type==="ADD_PASSWORD"){
    console.log("add email: "+ action.payload)
    return {
      ...state, password: action.payload
    }
  }
  return state;
}

export default LoginReducer;
