import {combineReducers} from 'redux';
import LoginDetailsReducers from '../Containers/LoginDetailsContainer/reducer';
import QuestionnaireReducers from '../Containers/QuestionnaireContainer/reducer';
import WorkOutReducers from '../Containers/Workout/WorkoutContainer/reducer';
import SignUpReducers from '../Containers/SignUpContainer/reducer';
import ForgetPasswordReducers from '../Containers/ForgetPasswordContainer/reducer';
import RootReducers from '../Containers/RootContainer/reducer';
import FooterReducers from '../Containers/Workout/FooterContainer/reducer';
import ProfileReducers from '../Containers/ProfileContainer/reducer';
import ExerciseReducers from '../Containers/ExerciseContainer/reducer';

import WorkoutReducers from '../Containers/Workout/reducer';


//here is for put all seperate data together into a .js file Reducer
//now Reducer represnts data union

const Reducer = combineReducers({
  WorkOutReducers,
  QuestionnaireReducers,
  FooterReducers,
  ProfileReducers,
  ExerciseReducers,
  LoginDetailsStates: LoginDetailsReducers,
  SignUpReducersStates: SignUpReducers,
  ForgetPasswordStates: ForgetPasswordReducers,
  RootStates: RootReducers,

  PlanReducers: WorkoutReducers,
})

export default Reducer;
