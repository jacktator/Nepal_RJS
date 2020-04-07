import axios from 'axios';
import { second } from './Component/contentData';
import {API_ACF, programmeTable} from '../config';
import { createNewRehab, arrayOfRehab } from '../Rehab/actions';

export const finishQuery = data => ({ type: 'FINISH_QUERY', payload: data });

export const createProgram = callback => (dispatch) => {
  const {
    user_id, path, days, location,
  } = sessionStorage;
  const fields = {
    program_name: path,
    user_id,
    finish_date: '',
    days,
    progress: 1,
    ask_feedback: false,
    feedback_value: '0',
    finish_for_day: false,
    exercise_place: location,
    select_finish: 0,
    updatedate: 'begin',
  };
  axios.post('/program',
    { status: 'publish', fields })
    .then((res) => {
      console.log(res);
      sessionStorage.setItem('progress', 1);
      callback();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getExercises = resData => (dispatch) => {
  const { location, path, days } = sessionStorage;

  axios.get(`${API_ACF}/${location}_${programmeTable[path]}_${days}/`)
    .then((res) => {
      console.log(res);
      dispatch(createProgram({ exercises: res.data.exercises, ...resData }));
    })
    .catch(
      (err) => {
        console.log(err);
      },
    );
};


export const createQuestionnaire = (data, callback) => (dispatch) => {
  const fields = {
    user_id: sessionStorage.user_id,
    exercise_place: data.location,
    days_per_week: data.days,
    goals: data.goal,
    injury_management: data.rehab,
    posture_correction: data.posture,
    stress: data.stress,
    productivity: data.productivity,
    work_injury: data.injury,
    health_feeling: data.health,
    daily_activity: data.active,
    current_activity: data.exercise,
  };
  axios.post('/questionnaire',
    {
      status: 'publish',
      fields,
    })
    .then((res) => {
      const resData = res.data.acf;
      const path = second[resData.exercise_place].find(v => v.id === (1 * resData.goals)).path;
      sessionStorage.setItem('path', path);
      sessionStorage.setItem('location', resData.exercise_place);
      sessionStorage.setItem('days', resData.days_per_week);
      console.log(res);
      dispatch(createProgram(callback));
      console.log(data.posture >= arrayOfRehab.posture.length && data.rehab >= arrayOfRehab.injury.length);
      if (!(data.posture >= arrayOfRehab.posture.length && data.rehab >= arrayOfRehab.injury.length)) {
        dispatch(createNewRehab({ user_id: sessionStorage.user_id, posture: data.posture - 1, injury: data.rehab - 1 }));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUserInfo = data => (dispatch) => {
  axios.post(`/users/${sessionStorage.user_id}`, { name: data.name, fields: { weight: data.weight, age: data.age, gender: data.gender } })
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });
};
