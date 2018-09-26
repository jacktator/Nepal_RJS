export function addError (errorMessage: string) {
  return {
    type: "ADD_ERROR",
    payload: errorMessage
  }
}
export function removeError () {
  return {
    type: "REMOVE_ERROR",
    payload: null
  }
}
