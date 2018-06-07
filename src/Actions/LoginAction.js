import axios from 'axios';

export function LoginAction(email, password){
  return(dispatch)=>{
    // return axios.post("https://jsonplaceholder.typicode.com/users", {email}, {password})
    // .then((response)=>{
    //
    //   dispatch(addEmail(email)),
    //   console.log(email)
    //
    //   dispatch(addPassword(password)),
    //   console.log(password)
    //
    // }).catch((error)=>{
    //   dispatch(catchError(error))
    // })
    dispatch(addEmail(email)),
     console.log(email)

     dispatch(addPassword(password)),
     console.log(password)
  };
}

//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer

export function addEmail(email){
  return {
    type:"ADD_EMAIL",
    payload: email
  }
}
export function addPassword(password){
  return {
    type:"ADD_PASSWORD",
    payload: password
  }
}

export function catchError(error){
  return{
    type: "CATCH_ERROR",
    payload: error
  }
}
