import {combineReducers} from 'redux';
import UserReducer from './userReducers';
import ActReducer from './actReducer';
import loginDetail from './login_detail';
import questionnaire from './questionnaire';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  loginDetail,
  questionnaire,
  Users: UserReducer,
  Act: ActReducer,
})

export default Reducer;
