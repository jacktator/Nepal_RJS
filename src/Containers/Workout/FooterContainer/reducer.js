// @flow
let DefaultState = {
  currentFooterTab: 'history',
  hidden: false,
  fullScreen: false,
}

const FooterReducers = (state: Object = DefaultState, action: Function) => {
  switch (action.type) {
    case "SELECT_FOOTER":
      return {
        ...state, currentFooterTab: action.payload
      }

    default:
      return state;
  }
}

export default FooterReducers;
