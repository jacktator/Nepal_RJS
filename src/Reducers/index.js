import {combineReducers} from 'redux';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  LoginDetailsStates: LoginDetailsReducers
})

export default Reducer;
