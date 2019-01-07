import { combineReducers } from 'redux';
import UserConfig from './UserConfig/reducer';
import Questionnaire from './Questionnaire/reducer';
import Workout from './Workout/reducer';
import Rehab from './Rehab/reducers';

// here is for put all seperate data together into a .js file Reducer
// now Reducer represnts data union

const Reducer = combineReducers({
  UserConfig,
  Questionnaire,
  Workout,
  Rehab,
});

export default Reducer;
