export default function (state = {
  programQuery: false,
  directToQuestionnaire: false,
  dailyQuery: false,
  historyQuery: false,
  exercises: [],
  unselectedExercises: [],
  renderExercises: [],
  exerciseDetails: {},
  selectedExercisesQuery: false,
  selectedExercises: [],
  programmeUpdateDate: '',
  exercisePageQuery: false,
  alldayExercises: [[], [], [], [], [], [], [], [], [], []],
  historyProgrammeList: [],
  historyForSpecificExercise: [],
  specificProgrammeHistory: [],
  youtubeLink: ['Lwcqvnc7q58', 'Lwcqvnc7q58'],
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
    case 'SET_DAY_EXERCISES':
      return {
        ...state, exercises: action.payload,
      };
    case 'SET_UNSELECTED_EXERCISES':
      return {
        ...state, unselectedExercises: action.payload,
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
    case 'SET_SELECTED_WORKOUT_EXERCISES':
      return {
        ...state, selectedExercises: action.payload,
      };
    case 'SET_HISTORY_PROGRAMME':
      return {
        ...state, historyProgrammeList: action.payload,
      };
    case 'SET_TODAY_EXERCISES':
      return {
        ...state, todayExercises: action.payload,
      };
    case 'SET_SPECIFIC_EXERCISE_HISTORY':
      return {
        ...state, historyForSpecificExercise: action.payload,
      };
    case 'SET_SPECIFIC_PROGRAMME_HISTORY':
      return {
        ...state, specificProgrammeHistory: action.payload,
      };
    case 'SET_YOUTUBE_LINK':
      return {
        ...state, youtubeLink: action.payload,
      };
    case 'SET_PROGRAMME_DATE':
      return {
        ...state, programmeUpdateDate: action.payload,
      };
    case 'FINISH_Program_QUERY':
      return {
        ...state, programQuery: action.payload,
      };
    case 'FINISH_Daily_QUERY':
      return {
        ...state, dailyQuery: action.payload,
      };
    case 'FINISH_EXERCISE_PAGE_QUERY':
      return {
        ...state, exercisePageQuery: action.payload,
      };
    case 'Finish_History_Query':
      return {
        ...state, historyQuery: action.payload,
      };
    case 'DIRECT_QUESTIONNAIRE':
      return {
        ...state, directToQuestionnaire: action.payload,
      };
    case 'SELECTED_EXERCISES_QUERY':
      return {
        ...state, selectedExercisesQuery: action.payload,
      };
    default:
      return state;
  }
}
