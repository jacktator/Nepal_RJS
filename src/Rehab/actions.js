import axios from 'axios';
import { rehabProgramme } from '../config';

const arrayOfRehab = {
  posture: ['rs', 'apt', 'sp'],
  injury: ['lbp', 'np', 'sp', 'hp'],
};
const destructure = (data) => {
  if (data === '') return;
  const a = data.split(';');
  const result = {
    injury: a[0],
    posture: a[1],
  };
  let m = a[0].split(',');
  m = m.split('|');
  const n = a[1];
};

export const setPosture = data => ({ type: 'SET_POSTURE', payload: data });
export const setInjury = data => ({ type: 'SET_INJURY', payload: data });
export const showQuestionnaireForCreate = data => ({ type: 'SHOW_QUESTIONNAIRE_CREATE', payload: data });
export const fetchingCreatingRehab = data => ({ type: 'QUERRY_CREATING', payload: data });

export const getDailyRehab = data => (dispatch) => {
  axios.get(`/rehab_program?filter[author]=${sessionStorage.user_id}&orderby=date&order=desc`)
    .then((res) => {
      console.log(res);
      if (res.data.length === 0) { dispatch(showQuestionnaireForCreate(true)); return; }
      if (res.data[0].progress === 7) { dispatch(showQuestionnaireForCreate(true)); }
      const { injury, posture } = res.data[0].acf;
      posture && dispatch(getPosture(posture));
      injury && dispatch(getPosture(injury));
    })
    .catch(err => console.log(err));
};

export const createNewRehab = data => (dispatch) => {
  axios.post('/rehab_program', {
    fields: {
      progress: 1,
      posture: data.posture >= arrayOfRehab.posture.length ? 'empty' : arrayOfRehab.posture[data.posture],
      injury: data.injury >= arrayOfRehab.injury.length ? 'empty' : arrayOfRehab.injury[data.injury],
      user_id: data.user_id,
    },
    status: 'publish',
  })
    .then(
      (res) => {
        console.log(res);
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
  axios.get(`/${rehabProgramme.posture[data]}`)
    .then(
      (ref) => {
        console.log(ref);
        dispatch(setPosture(ref.data.acf));
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};

export const getInjury = data => (dispatch) => {
  axios.get(`/${rehabProgramme.injury[data]}`)
    .then(
      (ref) => {
        console.log(ref);
        dispatch(setInjury(ref.data.acf));
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};
