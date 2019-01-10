export default function (state = {
  posture: [],
  injury: [],
  showCreationQuestionnaire: false,
  querryCreating: false,
  selectedRehabExercises: {},
  querryDailyData: false,
  rehabExercisesRecorded: [],
}, action) {
  switch (action.type) {
    case 'SET_POSTURE':
      return {
        ...state, posture: action.payload,
      };
    case 'SET_INJURY':
      return {
        ...state, injury: action.payload,
      };
    case 'SHOW_QUESTIONNAIRE_CREATE':
      return {
        ...state, showCreationQuestionnaire: action.payload,
      };
    case 'QUERRY_CREATING':
      return {
        ...state, querryCreating: action.payload,
      };
    case 'SET_SELECTED_EXERCISES':
      return {
        ...state, selectedRehabExercises: action.payload,
      };
    case 'SET_REHAB_EXERCISE_RECORDED':
      return {
        ...state, rehabExercisesRecorded: action.payload,
      };
    case 'FINISH_QUERRY_DAILY_DATA':
      return {
        ...state, querryDailyData: action.payload,
      };
    default:
      return state;
  }
}
