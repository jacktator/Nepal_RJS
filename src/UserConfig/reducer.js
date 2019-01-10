export default function (state = {
  LoginStatus: false,
  RegisterStatus: false,
  queryLoginStatus: false,
  error: false,
}, action) {
  switch (action.type) {
    case 'CHECK_LOGINSTATE':
      return {
        ...state, LoginStatus: action.payload,
      };
    case 'CHECK_REGISTER':
      return {
        ...state, RegisterStatus: action.payload,
      };
    case 'QUERY_LOGIN':
      return {
        ...state, queryLoginStatus: action.payload,
      };
    case 'SHOW_ERROR':
      return {
        ...state, error: action.payload,
      };
    default:
      return state;
  }
}
