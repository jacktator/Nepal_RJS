// @flow

export function keepWorkOut (value: number) {

  return {
    type: "KEEP_WORKOUT",
    payload: value
  }
}
export function updateExercise (previousValue, value) {

  return {
    type: "UPDATE_EXERCISE",
    payload: [previousValue, value]
  }
}
