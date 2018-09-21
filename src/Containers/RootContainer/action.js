export function checkLogin(){
  return{
    type: "CHECK_CHANGE",
    payload: true
  }
}

export function checkLogout(){
  return{
    type: "CHECK_CHANGE",
    payload: false
  }
}

export function checkRegister(){
  return{
    type: "CHECK_REGISTER",
    payload: true
  }
}
