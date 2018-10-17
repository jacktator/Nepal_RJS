import axios from 'axios';
//fetch Current rehab from the database
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

//fetch the rehab for particular type to make available to user to choose with
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

//this function update the rehab list for the user
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
//
export function getRehabRecord(rehabID){
  return(dispatch: Function) => {
    dispatch(isFetchingRehabRecord(true));
    var day = new Date().getDay();
    return axios.get(`https://nepal.sk8tech.io/wp-json/wp/v2/rehab_record?filter[meta_key]=rehab_program_id&filter[meta_value]=${rehabID}&filter[meta_key]=day&filter[meta_value]=${day}`)
    .then((response) => {
      console.log(response)
      if(response.data.length ===0 ){
        let user_id = sessionStorage.getItem('user_id');
        let token = sessionStorage.getItem('token');
        return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/rehab_record`,
          {
              status: "publish",
              fields:{
                user_id: user_id,
                rehab_program_id: rehabID,
                day: day
              }
          }, {
            headers:{ Authorization: "Bearer" + token }
          }).then((response) => {
              dispatch(setRehabRecord(response.data.acf));
              dispatch(setRehabRecordID(response.data.id));
              dispatch(isFetchingRehabRecord(false))
          }).catch((error) =>{
            console.log(error);
            console.log(error.response);
          })

      }else{
        dispatch(setRehabRecord(response.data[0].acf));
        dispatch(setRehabRecordID(response.data[0].id));
        dispatch(isFetchingRehabRecord(false))
      }
    }).catch((error)=> {
      console.log(error);
      console.log(error.response);
    })
  }
}

export function saveRehabRecord(rehabRecordID, record){
  return(dispatch: Function) => {
    let token = sessionStorage.getItem('token');
    let rehabRecord = JSON.parse(JSON.stringify(record));
    let rehab;
    if(rehabRecord.rehab){
      //got the rehab data
    }else{
      //cannot find the rehabRecord create the new value instead
      //rehab = [{ rehab_category:"raul", data: [{ name: "lg", sets:3}] }]
    }
    return axios.post(`https://nepal.sk8tech.io/wp-json/wp/v2/rehab_record/${rehabRecordID}`,{
      status: "publish",
      fields: {
        rehab: rehab
      }
    }, {
      headers:{ Authorization: "Bearer" + token }
    }).then((response)=> {
      console.log(response);
    }).catch((error)=> {
      console.log(error);
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
export function setRehabRecord(rehabRecord: Object) {
  return {
    type: "SET_REHAB_RECORD",
    payload: rehabRecord
  }
}
export function setRehabRecordID(id: Number) {
  return {
    type: "SET_REHAB_RECORD_ID",
    payload: id
  }
}
export function isFetchingRehabRecord(value: Boolean) {
  return {
    type: "IS_FETCHING_REHAB_RECORD",
    payload: value
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
