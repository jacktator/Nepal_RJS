import {combineReducers} from 'redux';
import UserReducer from './userReducers';
import ActReducer from './actReducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  Users: UserReducer,
  Act: ActReducer,
})

export default Reducer;
