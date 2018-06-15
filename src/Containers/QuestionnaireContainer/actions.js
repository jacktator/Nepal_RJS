// @flow
import { QUESTIONNAIRE } from '../../constants';

export function addQuestionnaire(fields) {
  const action = {
    type: QUESTIONNAIRE,
    fields
  }
  return action;
}
