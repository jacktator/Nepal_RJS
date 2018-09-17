import axios from 'axios';

export function getHistory() {
  alert("get history");
  return(dispatch: Function) => {
    let user_id = localStorage.getItem('user_id');
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/record?filter[meta_key]=user_id&filter[meta_value]=${user_id}`)
    .then((response) => {
      console.log(response);
      console.log("response",response.data)
      let historyData = [];
      response.data.map((data,key) => {
        historyData.push(data.acf);
      })
      
      dispatch(setHistory(historyData))
    }).catch((error)=> {
      console.log(error);
    })
  }//end return dispatch function
}
export function setHistory( history: Object){
  return {
    type: "SET_HISTORY",
    payload: history
  }
}
