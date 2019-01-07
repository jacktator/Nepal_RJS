export default function (state = {
  posture: [],
  injury: [],
  showCreationQuestionnaire: false,
  querryCreating: false,
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
    default:
      return state;
  }
}
