export function checkLogin(){
  return{
    type: "CHECK_CHANGE",
    payload: true
  }
}

export function checkLogout(){
  window.sessionStorage.clear();
  return{
    type: "CHECK_CHANGE",
    payload: false
  }
}

export function checkRegister(justRegistered: Boolean){
  return{
    type: "CHECK_REGISTER",
    payload: justRegistered
  }
}
