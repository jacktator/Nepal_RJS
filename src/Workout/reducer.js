export default function (state = {
  programQuery: false,
  directToQuestionnaire: false,
  dailyQuery: false,
  exercises: [],
  unselectedExercises: [],
  programSelectStatus: 'UNFETCHED',
  renderExercises: [],
  exerciseDetails: {},
  selectedExercisesQuery: false,
  selectedExercises: [],
  exercisePageQuery: false,
  alldayExercises: [[], [], [], [], [], [], [], [], [], []],
  todayExercises: {
    exeLength: '',
    exe_1: '',
    exe_2: '',
    exe_3: '',
    exe_4: '',
    exe_5: '',
    exe_6: '',
    exe_7: '',
    exe_8: '',
    exe_9: '',
    finish: false,
  },
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
    case 'SET_RENDER_EXERCISE':
      return {
        ...state, renderExercises: action.payload,
      };
    case 'SET_EXERCISE_DETAILS':
      return {
        ...state, exerciseDetails: action.payload,
      };
    case 'SET_ALLDAY_EXERCISES':
      return {
        ...state, alldayExercises: action.payload,
      };
    case 'SET_SELECTED_EXERCISES':
      return {
        ...state, selectedExercises: action.payload,
      };
    case 'SELECTED_EXERCISES_QUERY':
      return {
        ...state, selectedExercisesQuery: action.payload,
      };
    case 'FINISH_EXERCISE_PAGE_QUERY':
      return {
        ...state, exercisePageQuery: action.payload,
      };
    case 'SET_TODAY_EXERCISES':
      return {
        ...state, todayExercises: action.payload,
      };
    default:
      return state;
  }
}
