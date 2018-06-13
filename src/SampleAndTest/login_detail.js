import { LOGIN_DETAILS } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case LOGIN_DETAILS:
      const { loginDetail } = action;
      return {
        loginDetail
      }
    default:
      return state;
  }
}
