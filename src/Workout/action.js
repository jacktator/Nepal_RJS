import axios from 'axios';
import { programmeTable } from '../config';

export const statusArray = ['SELECTED', 'UNFETCHED', 'UNSELECTED'];

const programSelectState = (sampleLength, selectedLength) => {
  const statusIndex = sampleLength - selectedLength;
  if (statusIndex > 0) {
    return statusArray[2];
  } if (statusIndex === 0) {
    return statusArray[0];
  } return statusArray[1];
};

const handleExercise = data => [...data.map(v => v.acf)];

const dealStringToExerciseArray = (input) => {
  const b = [...input.map((v) => {
    const vi = v.substring(1, v.length - 1).split(',');
    return Object.assign({}, { name: vi[0], id: vi[1], icon_link: vi[2] });
  })];
  return b;
};

const getDayInWeek = (progress, days) => {
  if (progress <= days) {
    return progress;
  } if (progress % days === 0) {
    return days;
  } return progress % days;
};

export const finishQuery = boo => ({ type: 'FINISH_Program_QUERY', payload: boo });
export const noProgram = () => ({ type: 'DIRECT_QUESTIONNAIRE', payload: true });
export const setExercises = data => ({ type: 'SET_DAY_EXERCISES', payload: data });
export const setUnselectedExercises = data => ({ type: 'SET_UNSELECTED_EXERCISES', payload: data });
export const setProgramSelectedState = data => ({ type: 'SET_PROGRAM_SELECTED_STATE', payload: data });
export const finishDailyQuery = boo => ({ type: 'FINISH_Daily_QUERY', payload: boo });
export const setRenderExercise = data => ({ type: 'SET_RENDER_EXERCISES', payload: data });

export const updataOneExercise = data => (dispatch) => {
  axios.post(`/day_${data.day}/${data.id}`, { fields: { [`exe_${data.exeNum}`]: data.exeData } })
    .then(res => console.log(res))
    .catch(res => console.log(res));
};

export const newDaylyExercise = data => (dispatch) => {
  const { day, exeLength, programmeID } = data;
  axios.post(`/day_${day}`, { fields: { exeLength, programmeID } })
    .then()
    .catch();
};


export const getExercisesSample = (baseInfo, selectedLength) => (dispatch) => {
  const {
    location, path, days, dayInWeek,
  } = baseInfo;
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/${location}_${programmeTable[path]}_${days}?filter[meta_key]=day&filter[meta_value]=${dayInWeek}`)
    .then((res) => {
      console.log('sample', res);
      const data = handleExercise(res.data);
      dispatch(setUnselectedExercises(data));
      const status = programSelectState(data.length, selectedLength);
      dispatch(setProgramSelectedState(status));
      dispatch(finishDailyQuery(false));
    })
    .catch(err => console.log(err));
};


// Programme Page called

export const getCurrentProgram = getExe => (dispatch) => {
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/program?filter[author]=${sessionStorage.user_id}&orderby=date&order=desc`)
    .then((res) => {
      // if user do not have any programme page redirect to the questionnaire page
      if (res.data.length === 0) {
        dispatch(noProgram());
        return;
      }
      // the newest programme as the current programme
      const data = (res.data)[0].acf;
      console.log(data);
      const dayInWeek = getDayInWeek(data.progress, data.days);
      const exercises = dealStringToExerciseArray(data[`day_${dayInWeek}_exe`].split(';'));
      sessionStorage.setItem('progress', data.progress);
      sessionStorage.setItem('dayInWeek', dayInWeek);
      sessionStorage.setItem('path', data.program_name);
      sessionStorage.setItem('location', data.exercise_place);
      sessionStorage.setItem('days', data.days);
      sessionStorage.setItem('programmeID', (res.data)[0].id);
      dispatch(setExercises(exercises));
      dispatch(finishQuery(false));
      if (getExe) {
        const baseInfo = {
          location: data.exercise_place, path: data.program_name, days: data.days, dayInWeek,
        };
        console.log('getprogram', exercises.length);
        dispatch(getExercisesSample(baseInfo, exercises.length));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// daily page get exercise

export const getDailyProgramExercise = data => (dispatch) => {
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/program/${data.programmeID}`)
    .then((res) => {
      const { acf } = res.data;
      const exercises = acf[`day_${data.day}_exe`].split(';');
      const dealedExercises = dealStringToExerciseArray(exercises);
      dispatch(setExercises(dealedExercises));
    })
    .catch();
};

export const getDailyExercises = data => (dispatch) => {
  // if users directly access this page, get program first
  if (data.length === 0) {
    dispatch(getCurrentProgram(true));
    console.log('progress is null');
    return;
  }
  const {
    days, location, path, dayInWeek,
  } = sessionStorage;
  const baseInfo = {
    location,
    path,
    days,
    dayInWeek,
  };
  console.log('progress is not null');
  dispatch(getExercisesSample(baseInfo, data.length));
  // axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/day_${days}`)
  //   .then((res) => {
  //     const { dealedRES } = handleExercise(res.data);
  //     dispatch(setExercises(dealedRES));
  //   })
  //   .catch(err => console.log(err));
};
