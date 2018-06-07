import axios from 'axios';
import hashHistory from 'react-router';


export function LoginAction(email, password){
  return(dispatch)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/", {
      username: email,
      password: password,
    })
    .then((response)=>{
      let token = response.data.token
      console.log("%%%%%%%%%" + token);

      // dispatch(upDateToken(token))

      dispatch(addEmail(email));
      console.log(email)
      dispatch(addPassword(password));
      console.log(password)




    }).catch((error)=>{
      dispatch(catchError(error))
    })
      // return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/users/register", {
      //   username: email,
      //   email: email,
      //   password: password
      // })
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
    // dispatch(addEmail(email));
    // dispatch(addPassword(password));
  };
}

//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer
export function upDateToken(token){

}

export function addEmail(email){
  console.log("#####the value of email has been input into action")
  return {
    type:"ADD_EMAIL",
    payload: email
  }
}

export function addPassword(password){
  console.log("#####the value of password has been input into action")
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
