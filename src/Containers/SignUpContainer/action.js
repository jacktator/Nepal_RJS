import axios from 'axios';

export function SignUpActions(username, email, password){

  return(dispatch)=>{
    return axios.post("https://nepal.sk8tech.io/wp-json/wp/v2/users/register", {
      username: username,
      email: email,
      password: password,
    })
    .then((response)=>{
      console.log('register successfully!!')
      console.log(response.data);

    }).catch((error)=>{
      //dispatch(catchError(error))
      console.log(error)
    })
  };
}

export function addUsername(username){
  return {
    type:"ADD_USERNAME",
    payload: username
  }
}

export function addEmail(email){
  //console.log("#####the value of email has been input into action")
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
