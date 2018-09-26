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
  else if (action.type==="FETCH_RESPONSE"){
    //console.log("add token: "+ action.payload)
    return {
      ...state, fetch: action.payload
    }
  }
  else if (action.type==="CATCH_ERROR"){

    //console.log("add token: "+ action.payload)
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
