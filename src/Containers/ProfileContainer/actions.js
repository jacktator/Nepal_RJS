import axios from 'axios';

export function addWeight (weight: number) {
  return {
    type: "ADD_WEIGHT",
    payload: weight.toString(),
  }
}
