import {combineReducers} from 'redux';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';
import QuestionnaireReducers from '../Containers/QuestionnaireContainer/reducer';
import WorkOutReducers from '../Containers/Workout/WorkoutContainer/reducer';
import SignUpReducers from '../Containers/SignUpContainer/reducer';
import ForgetPasswordReducers from '../Containers/ForgetPasswordContainer/reducer';
import RootReducers from '../Containers/RootContainer/reducer';
import FooterReducers from '../Containers/Workout/FooterContainer/reducer';
import ErrorHandler from '../Containers/ErrorHandler/reducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  WorkOutReducers,
  QuestionnaireReducers,
  FooterReducers,
  LoginDetailsStates: LoginDetailsReducers,
  SignUpReducersStates: SignUpReducers,
  ForgetPasswordStates: ForgetPasswordReducers,
  RootStates: RootReducers,
  ErrorHandler
})

export default Reducer;
