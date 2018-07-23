// @flow
export function keepWarmUp (value: number) {
  return {
    type: "KEEP_WARMUP",
    payload: value
  }
}

export function keepWorkOut (value: number) {

  return {
    type: "KEEP_WORKOUT",
    payload: value
  }
}
