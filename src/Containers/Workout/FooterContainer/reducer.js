
let DefaultState = {
  currentFooterTab: 'workoutTab',
  hidden: false,
  fullScreen: false,
}

const FooterReducers =(state: Object= DefaultState, action: Function) => {

  switch (action.type) {
    case "SELECT_FOOTER":
      return {
        ...state, currentFooterTab: action.payload
      }
      break;

    default:
      return state;
  }
}

export default FooterReducers;
