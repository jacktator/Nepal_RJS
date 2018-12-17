export default function (state = {
  programQuery: false,
  directToQuestionnaire: false,
  dailyQuery: false,
  exercises: [],
  unselectedExercises: [],
  programSelectStatus: 'UNFETCHED',
}, action) {
  switch (action.type) {
    case 'FINISH_Program_QUERY':
      return {
        ...state, programQuery: action.payload,
      };
    case 'DIRECT_QUESTIONNAIRE':
      return {
        ...state, directToQuestionnaire: action.payload,
      };
    case 'SET_DAY_EXERCISES':
      return {
        ...state, exercises: action.payload,
      };
    case 'SET_UNSELECTED_EXERCISES':
      return {
        ...state, unselectedExercises: action.payload,
      };
    case 'SET_PROGRAM_SELECTED_STATE':
      return {
        ...state, programSelectStatus: action.payload,
      };
    case 'FINISH_Daily_QUERY':
      return {
        ...state, dailyQuery: action.payload,
      };
    default:
      return state;
  }
}
