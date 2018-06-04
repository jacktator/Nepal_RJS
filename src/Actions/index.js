import { LOGIN_DETAILS} from '../constants';

export function loginDetails(loginDetail) {
  const action = {
    type: LOGIN_DETAILS,
    loginDetail
  }
  return action;
}
export function Questionnaire(detail) {
  const action = {
    type: LOGIN_DETAILS,
    detail
  }
  return action;
}
