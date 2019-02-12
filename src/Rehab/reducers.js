export default function (state = {
  posture: [],
  injury: [],
  showCreationQuestionnaire: false,
  querryCreating: false,
  selectedRehabExercises: {},
  querryDailyData: false,
  rehabExerciseQuery: false,
  rehabExercisesRecorded: [],
  dayRehabExercisesRecords: { id: 0, progress: 0, data: [] },
  renderExercises: [],
  rehabYoutubeLink: ['Lwcqvnc7q58', 'Lwcqvnc7q58'],
  rehubYoutubeDis: 'This is discription',
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
    case 'SET_SELECTED_REHAB_EXERCISES':
      return {
        ...state, selectedRehabExercises: action.payload,
      };
    case 'SET_REHAB_EXERCISE_RECORDED':
      return {
        ...state, rehabExercisesRecorded: action.payload,
      };
    case 'SET_DAY_EXERCISE_DATA':
      return {
        ...state, dayRehabExercisesRecords: action.payload,
      };
    case 'SET_RENDER_EXERCISES':
      return {
        ...state, renderExercises: action.payload,
      };
    case 'SET_REHAB_YOUTUBE_LINK':
      return {
        ...state, rehabYoutubeLink: action.payload,
      };
    case 'FINISH_QUERRY_DAILY_DATA':
      return {
        ...state, querryDailyData: action.payload,
      };
    case 'FINISH_REHAB_EXERCISE':
      return {
        ...state, rehabExerciseQuery: action.payload,
      };
    case 'SET_YOUTUBE_LINK':
      return {
        ...state, youtubeLink: action.payload,
      };
    case 'SET_YOUTUBE_DIS':
      return {
        ...state, rehubYoutubeDis: action.payload,
      };

    default:
      return state;
  }
}
