import axios from 'axios';

export function getHistory() {
  return(dispatch: Function) => {
    let user_id = sessionStorage.getItem('user_id');
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/record?filter[meta_key]=user_id&filter[meta_value]=${user_id}`)
    .then((response) => {
      let historyData = [];
      response.data.map((data,key) => (
        historyData.push(data.acf)
      ))
      dispatch(setHistory(historyData))
    }).catch((error)=> {
      console.log(error);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }//end return dispatch function
}
export function setHistory( history: Object){
  return {
    type: "SET_HISTORY",
    payload: history
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
