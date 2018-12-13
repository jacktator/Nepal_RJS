import { combineReducers } from 'redux';
import UserConfig from './UserConfig/reducer';
import Questionnaire from './Questionnaire/reducer';

// here is for put all seperate data together into a .js file Reducer
// now Reducer represnts data union

const Reducer = combineReducers({
  UserConfig,
  Questionnaire,
});

export default Reducer;
