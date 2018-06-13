
export function selectUser(user){
  console.log(user);
  return{
    type: "USER_SELECTED",
    payload: user
  }
}
