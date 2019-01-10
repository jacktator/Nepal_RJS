import axios from 'axios';
import { rehabProgramme } from '../config';

const arrayOfRehab = {
  posture: ['rs', 'apt', 'sp'],
  injury: ['lbp', 'np', 'sp', 'hp'],
};
export const destructure = (data) => {
  console.log('destructure', data);
  if (!data) { return []; }
  const a = data.split(';');
  const result1 = [...a.map((v) => {
    const o = v.split(',');
    if (o.length < 4) { return undefined; }
    return ({
      name: o[0], sets: o[1], reps: o[2], time: o[3], selected: true,

    });
  })];
  console.log('destructure Result', data);
  return result1;
};

const destructureTemp = (data) => {
  const result = {
    mobility: [...data.filter(v => v.acf.type === '0').map(v => v.acf)],
    releaseWork: [...data.filter(v => v.acf.type === '1').map(v => v.acf)],
    strengthEndurance: [...data.filter(v => v.acf.type === '2').map(v => v.acf)],
  };
  return result;
};
export const setPosture = data => ({ type: 'SET_POSTURE', payload: data });
export const setInjury = data => ({ type: 'SET_INJURY', payload: data });
export const showQuestionnaireForCreate = data => ({ type: 'SHOW_QUESTIONNAIRE_CREATE', payload: data });
export const fetchingCreatingRehab = data => ({ type: 'QUERRY_CREATING', payload: data });
export const selectedRehabExercises = data => ({ type: 'SET_SELECTED_EXERCISES', payload: data });
export const rehabExercisesRecorded = data => ({ type: 'SET_REHAB_EXERCISE_RECORDED', payload: data });
export const finishQuerryDailyData = data => ({ type: 'FINISH_QUERRY_DAILY_DATA', payload: data });

export const keepExercise = data => (dispatch) => {
  console.log('keepExercise', data);
  const a = data.map(v => Object.values(v).join()).join(';');
  axios.post(`/rehab_program/${sessionStorage.rehabProgressID}`, { fields: { [`day${new Date().getDay()}`]: a } })
    .then(
      (res) => {
        dispatch(selectedRehabExercises(res.data));
        console.log(res);
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
  console.log(a);
};

export const getRehabRecord = id => (dispatch) => {
  axios.get(`/rehab_record?filter[meta_key]=rehab_program_id&filter[meta_value]=${id}`)
    .then(
      (res) => {
        console.log(res);
        dispatch(rehabExercisesRecorded(res.data));
      },
    )
    .catch(
      err => console.log(err),
    );
};

export const createNewRehab = data => (dispatch) => {
  axios.post('/rehab_program', {
    fields: {
      progress: 1,
      posture: data.posture >= arrayOfRehab.posture.length ? 'empty' : arrayOfRehab.posture[data.posture],
      injury: data.injury >= arrayOfRehab.injury.length ? 'empty' : arrayOfRehab.injury[data.injury],
      day0: '',
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
      day6: '',
      user_id: data.user_id,
    },
    status: 'publish',
  })
    .then(
      (res) => {
        dispatch(getDailyRehab());
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};

export const getPosture = data => (dispatch) => {
  console.log(rehabProgramme.posture[data]);
  axios.get(`/${rehabProgramme.posture[data]}?filter[posts_per_page]=30`)
    .then(
      (ref) => {
        console.log(ref);
        dispatch(setPosture(destructureTemp(ref.data)));
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};

export const getInjury = data => (dispatch) => {
  axios.get(`/${rehabProgramme.injury[data]}?filter[posts_per_page]=30`)
    .then(
      (ref) => {
        console.log(ref);
        dispatch(setInjury(destructureTemp(ref.data)));
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};

export const getDailyRehab = day => (dispatch) => {
  axios.get(`/rehab_program?filter[author]=${sessionStorage.user_id}&orderby=date&order=desc`)
    .then((res) => {
      console.log(res);
      if (res.data.length === 0) { dispatch(showQuestionnaireForCreate(true)); return; }
      if (res.data[0].finish === true) { dispatch(showQuestionnaireForCreate(true)); }
      const { injury, posture } = res.data[0].acf;
      sessionStorage.setItem('rehabProgressID', res.data[0].id);
      dispatch(selectedRehabExercises(res.data[0]));
      const a = axios.get(`/rehab_record?filter[meta_key]=rehab_program_id&filter[meta_value]=${res.data[0].id}`);
      const b = posture !== 'empty' && axios.get(`/${rehabProgramme.posture[posture]}?filter[posts_per_page]=30`);
      const c = injury !== 'empty' && axios.get(`/${rehabProgramme.injury[injury]}?filter[posts_per_page]=30`);
      axios.all([a, b, c])
        .then(
          axios.spread((aa, bb, cc) => {
            console.log('acct', aa);
            console.log('perms', bb);
            console.log('c', cc);
            const postureTemp = destructureTemp(bb.data);
            const injuryTemp = destructureTemp(cc.data);
            console.log(postureTemp);
            console.log(injuryTemp);
            dispatch(rehabExercisesRecorded(aa.data));
            dispatch(setPosture(postureTemp));
            dispatch(setInjury(injuryTemp));
            dispatch(finishQuerryDailyData(false));
          }),
        );
    })
    .catch(err => console.log(err));
};
