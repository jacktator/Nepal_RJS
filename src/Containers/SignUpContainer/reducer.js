//this file is for getting the email and password

let DefaultState=
  {
    username:'Username@com',
    email:'E-mail',
    password:'1235678',

  }

const SignUpReducers = (state=DefaultState, action)=>{
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
  else if (action.type==="ADD_USERNAME"){
    //console.log("add token: "+ action.payload)
    return {
      ...state, username: action.payload
    }
  }
  return state;
}
export default SignUpReducers;
