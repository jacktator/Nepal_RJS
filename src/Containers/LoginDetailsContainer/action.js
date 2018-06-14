import axios from 'axios';

export function LoginDetailsActions(email, password){
  console.log('this function LoginDetailsActions is running')
  console.log('email:'+ email)
  console.log('password'+ password)

  return(dispatch)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/", {
      username: email,
      password: password,
    })
    .then((response)=>{
      let token = response.data.token
      window.localStorage.setItem('token', token);
      dispatch(upDateToken(token));
      // dispatch(validToken(token));

    }).catch((error)=>{
      dispatch(catchError(error))
    })
  };
}

//dispatch is for fire the functions
//functions are for store the values that are used to change the state
//in functions the values are binded with type which will be used in the Reducer


export function validToken(token){
  return(dispatch)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/validate",
      null, {
        headers:{
          Authorization: "Bearer" + token
        }
      }
    )
    .then((response)=>{
      console.log(response.data.data.status)
      dispatch(isAuthenticated());
    })
    .catch((error)=>{
      dispatch(catchError(error));
    })
  };
}

export function isAuthenticated(status){
  console.log(status)
  return{
    type:"IS_AUTHENTICATED",
    payload:true
  }
}

export function upDateToken(token){
  //console.log("now the token is :"+ token)
  return {
    type:"UPDATE_TOKEN",
    payload: token
  }
}

export function addEmail(email){
  //console.log("#####the value of email has been input into action:" + email)
  return {
    type:"ADD_EMAIL",
    payload: email
  }
}

export function addPassword(password){
  //console.log("#####the value of password has been input into action")
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
