import {combineReducers} from 'redux';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';
import Questionnaire from '../Containers/QuestionnaireContainer/reducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  Questionnaire,
  LoginDetailsStates: LoginDetailsReducers,
})

export default Reducer;
