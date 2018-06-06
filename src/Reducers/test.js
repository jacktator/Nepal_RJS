//notice: in here no importing action from other folder

let DefaultState=
  {
    color : "red",
  }


const mainReducer=(state=DefaultState, action)=>{
  if(action.type==="CHANGE_COLOR"){
    return {
      ...state, color: action.payload,
    }
  }
  else{
    console.log('i am running')
    return {
      ...state
    }
  }
}
export default mainReducer
