export function addError12 (errorMessage: string) {
  return {
    type: "ADD_ERROR",
    payload: errorMessage
  }
}
export function removeError12 () {
  return {
    type: "REMOVE_ERROR",
    payload: null
  }
}
