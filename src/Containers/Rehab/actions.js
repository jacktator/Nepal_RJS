import axios from 'axios';

export function fetchRehab(){
  return(dispatch: Function) => {
    console.log("fetch Rehab");
    dispatch(setInitialisation(true));
    let user_id = sessionStorage.getItem('user_id');
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/rehab_program?
                    filter[meta_key]=user_id&filter[meta_value]=${user_id}&filter[posts_per_page]=1`
    ).then((response) => {
      if(response.data.length === 0){
        alert("no rehab found")
      }else{
        console.log(response);
        console.log(response.data[0].acf);
        dispatch(setRehabID(response.data[0].id))
        dispatch(setRehab(response.data[0].acf))
        dispatch(setInitialisation(false));
      }
    }).catch((error) => {
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }
}
export function setRehab(rehab: Object) {
  return {
    type: "SET_REHAB",
    payload: rehab
  }
}
export function setRehabID(id: Number) {
  return {
    type: "SET_REHAB_ID",
    payload: id
  }
}
export function setInitialisation(value: Boolean){
  return {
    type: "SET_INITIALISATION",
    payload: value
  }
}

export function catchError(error: string){
  console.log(error);
  return{
    type: "CATCH_ERROR",
    payload: error
  }
}

export function removeError(){
  return{
    type: "REMOVE_ERROR",
    payload: null
  }
}
