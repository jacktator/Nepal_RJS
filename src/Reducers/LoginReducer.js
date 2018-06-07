
let infiState=
  {
    email:'',
    password:'',
  }

const loginReducer = (state=infiState, action)=>{
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
  else{
    return {
      ...state
    }
  }
}

export default loginReducer
