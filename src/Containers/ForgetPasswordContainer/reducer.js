//@flow
//this file is for getting the email and password

type Props={
  DefaultState: Object,
}

const DefaultState=
  {
    email:'E-Mail',
  }


const ForgetPasswordReducers = (state: Object=DefaultState, action:Function)=>{
  if(action.type==="ADD_EMAIL"){
    return {
      ...state, email: action.payload
    }
  }

  return state;
}
export default ForgetPasswordReducers;
