import { LOGIN_DETAILS} from '../constants';
import { QUESTIONNAIRE } from '../constants';

export function loginDetails(loginDetail) {
  const action = {
    type: LOGIN_DETAILS,
    loginDetail
  }
  return action;
}

export function addQuestionnaire(questionnaire) {
  const action = {
    type: QUESTIONNAIRE,
    questionnaire
  }
  return action;
}
