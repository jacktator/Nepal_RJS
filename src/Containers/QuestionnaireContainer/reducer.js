// @flow
import { QUESTIONNAIRE } from '../../constants';

let DefaultState = {
  nick_name: "",
  fields: {
    age: "",
    gender: "",
    weight: "",
    days_per_week: 3,
    goals: [],
    rehab_focus: [],
    stress: null,
    productivity: null,
    productive_after_exercise: null,
    work_injury: null,
    health_feeling: null,
    daily_activity: null,
    current_activity: null
  }

}

const QuestionnaireReducers =(state: Object= DefaultState, action: Function) => {

  console.log("QUESTIONNAIRE reducer");
  let fields = null;
  switch (action.type) {
    case "ADD_NAME":
    return {
      ...state, nick_name: action.payload
    }

    case "ADD_AGE":
      fields = {...state.fields};
      fields['age']= action.payload
      return {
        ...state, fields: fields
      }

    case "ADD_GENDER":
      fields = {...state.fields};
      fields['gender']= action.payload
      return {
        ...state, fields
      }

    case "ADD_WEIGHT":
      fields = {...state.fields};
      fields['weight']= action.payload
      return {
        ...state, fields
      }

    case "ADD_DAYS" :
      fields = {...state.fields};
      fields['days_per_week']= action.payload
      return {
        ...state, fields
      }

    case "ADD_GOALS" :
      fields = {...state.fields};
      fields['goals']= action.payload
      return {
        ...state, fields
      }

    case "ADD_REHAB_FOCUS" :
      fields = {...state.fields};
      fields['rehab_focus']= action.payload
      return {
        ...state, fields
      }

    case "ADD_STRESS" :
      fields = {...state.fields};
      fields['stress']= action.payload
      return {
        ...state, fields
      }

    case "ADD_PRODUCITIVITY" :
      fields = {...state.fields};
      fields['productivity']= action.payload
      return {
        ...state, fields
      }

    case "ADD_PRODCTIVE_AFTER_EXERCISE" :
      fields = {...state.fields};
      fields['productive_after_exercise']= action.payload
      return {
        ...state, fields
      }

    case "ADD_WORK_INJURY" :
      fields = {...state.fields};
      fields['work_injury']= action.payload
      return {
        ...state, fields
      }

    case "ADD_HEALTH_FEELING" :
      fields = {...state.fields};
      fields['health_feeling']= action.payload
      return {
        ...state, fields
      }

    case "ADD_DAILY_ACTIVITY" :
      fields = {...state.fields};
      fields['daily_activity']= action.payload
      return {
        ...state, fields
      }

    case "ADD_CURRENT_ACTIVITY" :
      fields = {...state.fields};
      fields['current_activity']= action.payload
      return {
        ...state, fields
      }


    case QUESTIONNAIRE:
      const data = action.state;
      return {
        data
      }
    default:
      return state;
  }
}
export default QuestionnaireReducers;
