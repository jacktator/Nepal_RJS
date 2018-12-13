import axios from 'axios';
import { programmeTable } from '../config';

const handleExercise = data => [...data.map(v => v.acf)];

export const finishQuery = () => ({ type: 'FINISH_Program_QUERY', payload: true });
export const setExercises = data => ({ type: 'SET_DAY_EXERCISES', payload: data });

export const getCurrentProgram = () => (dispatch) => {
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/program?filter[author]=${sessionStorage.user_id}&orderby=date&order=desc`)
    .then((res) => {
      const { data } = res[0].acf;
      console.log(res);
      sessionStorage.setItem('progress', data.progress);
      sessionStorage.setItem('path', data.program_name);
      sessionStorage.setItem('location', data.exercise_place);
      sessionStorage.setItem('days', data.days);
      sessionStorage.setItem('programmeID', res[0].id);
      dispatch(finishQuery());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPlan = () => (dispatch) => {
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/program?filter[author]=${sessionStorage.user_id}&orderby=date&order=desc`)
    .then((res) => {
      const { data } = res.acf;
      console.log(res);
      sessionStorage.setItem('progress', data.progress);
      sessionStorage.setItem('weeklyProgress', data.progress <= data.days ? data.progress : (data.progress % data.days === 0 ? data.days : data.progress % data.days));
      sessionStorage.setItem('path', data.program_name);
      sessionStorage.setItem('location', data.exercise_place);
      sessionStorage.setItem('days', data.days);
      dispatch(finishQuery());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getExercisesSample = (location, path, days) => (dispatch) => {
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/${location}_${programmeTable[path]}_${days}`)
    .then((res) => {
      const dealedRES = handleExercise(res.data);
      dispatch(setExercises(dealedRES));
    })
    .catch(err => console.log(err));
};

export const getDailyExercises = data => (dispatch) => {
  if (sessionStorage.getItem('progress') === null) {
    getCurrentProgram();
  }
  const {
    progress, days, location, path,
  } = sessionStorage;
  if (progress <= days) {
    getExercisesSample(location, path, days);
  }
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/day_${days}`)
    .then((res) => {
      dispatch(setExercises(dealedRES));
    });
};
