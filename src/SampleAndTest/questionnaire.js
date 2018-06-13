import { QUESTIONNAIRE } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case QUESTIONNAIRE:
      const { questionnaire } = action;
      return {
        questionnaire
      }
    default:
      return state;
  }
}
