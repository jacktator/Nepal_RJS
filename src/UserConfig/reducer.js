export default function (state = {
  LoginStatus: false,
  RegisterStatus: false,
}, action) {
  switch (action.type) {
    case 'CHECK_LOGINSTATE':
      return {
        LoginStatus: action.payload,
      };
    case 'CHECK_REGISTER':
      return {
        RegisterStatus: action.payload,
      };
    default:
      return state;
  }
}
