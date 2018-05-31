import action from '../Actions/FirstAction';

export default function (state=null, action){
  switch(action.type){
    case 'USER_SELECTED':
    return action.paylaod;
    break;
  }
  return state;
}
