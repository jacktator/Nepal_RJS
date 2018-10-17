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

export function fetchRehabList(name, type){
  return(dispatch: Function) => {
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/rehab?filter[meta_key]=name&filter[meta_value]=${name}`)
    .then((response) => {
      let rehabData = JSON.parse(JSON.stringify(response.data[0].acf));
      let index = rehabData.rehab_list.findIndex(i => { return i.type === type});
      let rehabList = rehabData.rehab_list[index];
      console.log(rehabList);
      dispatch(setRehabList(rehabList));
    }).catch((error) => {
      console.log(error);
      console.log(error.response);
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }
}

export function selectRehab(rehabID, rehab, selectedRehab, rehabIndex, dataIndex){
  return(dispatch : Function) => {
    dispatch(uploadingToServer(true));
    let rehabArray = JSON.parse(JSON.stringify(rehab));
    console.log("rehab before calculation", rehabArray)
    console.log("selectedRehab",selectedRehab);
    rehabArray[rehabIndex].data[dataIndex].name = selectedRehab.name;
    rehabArray[rehabIndex].data[dataIndex].sets = selectedRehab.sets;
    rehabArray[rehabIndex].data[dataIndex].reps = selectedRehab.reps;
    rehabArray[rehabIndex].data[dataIndex].time = selectedRehab.time;
    console.log("rehab after calculation", rehabArray)
    axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/rehab_program/${rehabID}`,
    {
      status: "publish",
      fields:{
        rehab: rehabArray
      }
    }).then((response) => {
        console.log(response)
        dispatch(setRehab(response.data.acf))
        dispatch(uploadingToServer(false));
    }).catch((error)=> {
      dispatch(uploadingToServer(false));
      if(error.response){
        dispatch(catchError(error.response.data.message));
      }else{
        dispatch(catchError("Oops! Unable to connect to the server. Either your device is offline or server is down."))
      }
    })
  }
}
export function setRehabList(rehabList: Object){
  return {
    type : "SET_REHAB_LIST",
    payload: rehabList
  }
}
export function setRehab(rehab: Object) {
  console.log("Setting rehab")
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
export function uploadingToServer(value : Boolean) {
  return {
    type: "UPLOADING_TO_SERVER",
    payload: value
  }
}
export function setInitialisation(value: Boolean){
  return {
    type: "SET_INITIALISATION",
    payload: value
  }
}

export function catchError(error: string){
  console.log("Catch error");
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

export function addInjuryManagement (injury_management: String) {
  return {
    type: "ADD_INJURY_MANAGEMENT",
    payload: injury_management
  }
}
export function addPostureCorrection (posture_correction: String) {
  return {
    type: "ADD_POSTURE_CORRECTION",
    payload: posture_correction
  }
}
