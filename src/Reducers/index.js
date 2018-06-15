import {combineReducers} from 'redux';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';
import Questionnaire from '../Containers/QuestionnaireContainer/reducer';
import SignUpReducers from '../Containers/SignUpContainer/reducer';
import ForgetPasswordReducers from '../Containers/ForgetPasswordContainer/reducer';
import RootReducers from '../Containers/RootContainer/reducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  Questionnaire,
  LoginDetailsStates: LoginDetailsReducers,
  SignUpReducersStates: SignUpReducers,
  ForgetPasswordStates: ForgetPasswordReducers,
  RootStates: RootReducers,
})

export default Reducer;
