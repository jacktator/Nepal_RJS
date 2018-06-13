// @flow
import { QUESTIONNAIRE } from '../../constants';

export function addQuestionnaire(questionnaire) {
  const action = {
    type: QUESTIONNAIRE,
    questionnaire
  }
  return action;
}
