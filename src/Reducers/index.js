import {combineReducers} from 'redux';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';
import QuestionnaireReducers from '../Containers/QuestionnaireContainer/reducer';
//import WorkoutReducers from '../Containers/Workout/WorkoutContainer/reducer';
import SignUpReducers from '../Containers/SignUpContainer/reducer';
import ForgetPasswordReducers from '../Containers/ForgetPasswordContainer/reducer';
import RootReducers from '../Containers/RootContainer/reducer';
import FooterReducers from '../Containers/Workout/FooterContainer/reducer';
import ProfileReducers from '../Containers/ProfileContainer/reducer';

import WorkoutReducers from '../Containers/Workout/reducer';

import HistoryReducers from '../Containers/Workout/HistoryContainer/reducer';

//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  WorkoutReducers,
  QuestionnaireReducers,
  FooterReducers,
  ProfileReducers,
  LoginDetailsStates: LoginDetailsReducers,
  SignUpReducersStates: SignUpReducers,
  ForgetPasswordStates: ForgetPasswordReducers,
  RootStates: RootReducers,
  HistoryReducers: HistoryReducers
})

export default Reducer;
