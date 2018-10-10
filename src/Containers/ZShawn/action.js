// import axios from 'axios';
export function fetchJson(){
  return(dispatch)=>{
    return fetch('./DataSources/fatlossday3.json')
    .then((response)=>{
      response.json()
    })
    .then((json)=>{
      dispatch(storeJson(json))
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}

function storeJson(data){
  return{
    type:"FETCH_JSON",
    payload: data
  }
}


//axios cannot get local jason, it has to be fetch
