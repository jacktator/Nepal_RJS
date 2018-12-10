import { combineReducers } from 'redux';
import UserConfig from './UserConfig/reducer';

// here is for put all seperate data together into a .js file Reducer
// now Reducer represnts data union

const Reducer = combineReducers({
  UserConfig,
});

export default Reducer;
