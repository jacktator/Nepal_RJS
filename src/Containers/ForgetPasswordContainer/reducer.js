//@flow
//this file is for getting the email and password


const DefaultState=
  {
    email:'Email',
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
