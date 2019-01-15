export default function (state = {
  LoginStatus: false,
  name: '',
  bod: '',
  avatar: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  weight: '',
  RegisterStatus: false,
  queryLoginStatus: false,
  queryRegisterStatus: false,
  queryProfile: false,
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
    case 'SET_NAME':
      return {
        ...state, name: action.payload,
      };
    case 'SET_WEIGHT':
      return {
        ...state, weight: action.payload,
      };
    case 'SET_AVATAR':
      return {
        ...state, avatar: action.payload,
      };
    case 'SET_BOD':
      return {
        ...state, bod: action.payload,
      };
    case 'QUERY_PROFILE':
      return {
        ...state, queryProfile: action.payload,
      };
    case 'QUERY_REGISTER':
      return {
        ...state, queryRegisterStatus: action.payload,
      };
    default:
      return state;
  }
}
