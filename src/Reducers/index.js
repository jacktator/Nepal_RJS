import {combineReducers} from 'redux';
import UserReducer from './userReducers';
import ActReducer from './actReducer';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';
import questionnaire from './questionnaire';
import Test from './test';
import Login from './LoginReducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  questionnaire,
  Users: UserReducer,
  Act: ActReducer,
  Test,
  LoginDetailsStates: LoginDetailsReducers
})

export default Reducer;
