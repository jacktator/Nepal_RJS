// @flow
import { QUESTIONNAIRE } from '../../constants';

export default (state = [], action) => {
  console.log("questionnaire reducer");
  switch (action.type) {
    case QUESTIONNAIRE:
      const data = action.state;
      return {
        data
      }
    default:
      return state;
  }
}
