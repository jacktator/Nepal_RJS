// @flow
import { QUESTIONNAIRE } from '../../constants';

export default (state = [], action) => {
  switch (action.type) {
    case QUESTIONNAIRE:
      const { fields } = action;
      return {
        fields
      }
    default:
      return state;
  }
}
