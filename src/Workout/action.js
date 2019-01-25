import axios from 'axios';
import { programmeTable } from '../config';

export const compareOver24 = (a) => {
  const now = new Date();
  const pre = new Date(a);

  const monDiff = now - pre;
  const day = now.getDate() - pre.getDate();
  if (monDiff >= 86400000) {
    return true;
  }
  if (day >= 1) {
    return true;
  }
  return false;
};

const handleExercise = data => [...data.map(v => v.acf)];

export const dealStringToExerciseArray = (input) => {
  const b = [...input.map((v) => {
    if (v) {
      const vi = v.substring(1, v.length - 1).split(',');
      return Object.assign({}, {
        name: vi[0],
        id: vi[1],
        icon_link: vi[2],
        feedback: vi[3],
        image_link: vi[4],
        progression_model: vi[5],
        reps: vi[6],
        sets: vi[7],
        video_link: vi[8],
      });
    }
    return ('unselected');
  })];
  return b;
};

const getExerciseDetailByProgress = (input, progressNum) => {
  const result = input.find(v => v.acf.progress === progressNum);
  if (result) {
    return result;
  }
  return false;
};

const getDayInWeek = (progress, days) => {
  if (~~progress <= ~~days) {
    return progress;
  } if (~~progress % ~~days === 0) {
    return days;
  } return ~~progress % ~~days;
};

export const setExercises = data => ({ type: 'SET_DAY_EXERCISES', payload: data });
export const setUnselectedExercises = data => ({ type: 'SET_UNSELECTED_EXERCISES', payload: data });
export const setRenderExercise = data => ({ type: 'SET_RENDER_EXERCISE', payload: data });
export const setExerciseDetails = data => ({ type: 'SET_EXERCISE_DETAILS', payload: data });
export const setAllDayExercises = data => ({ type: 'SET_ALLDAY_EXERCISES', payload: data });
export const setTodayExercises = data => ({ type: 'SET_TODAY_EXERCISES', payload: data });
export const setSelectedExercises = data => ({ type: 'SET_SELECTED_WORKOUT_EXERCISES', payload: data });
export const setSelectedExercisesQuery = data => ({ type: 'SELECTED_EXERCISES_QUERY', payload: data });
export const setHistoryProgramme = data => ({ type: 'SET_HISTORY_PROGRAMME', payload: data });
export const setSpecificExericseHistory = data => ({ type: 'SET_SPECIFIC_EXERCISE_HISTORY', payload: data });
export const setHistoryForSpecificProgramme = data => ({ type: 'SET_SPECIFIC_PROGRAMME_HISTORY', payload: data });
export const setYoutubeLink = data => ({ type: 'SET_YOUTUBE_LINK', payload: data });
export const finishQuery = boo => ({ type: 'FINISH_Program_QUERY', payload: boo });
export const finishDailyQuery = boo => ({ type: 'FINISH_Daily_QUERY', payload: boo });
export const finishExercisePageQuery = data => ({ type: 'FINISH_EXERCISE_PAGE_QUERY', payload: data });
export const finishHistoryQuery = data => ({ type: 'Finish_History_Query', payload: data });
export const noProgram = data => ({ type: 'DIRECT_QUESTIONNAIRE', payload: data });
export const setProgrammeUpdateDate = data => ({ type: 'SET_PROGRAMME_DATE', payload: data });

// daily page change button's dialog get exercises
export const selectExercise = id => (dispatch) => {
  console.log('sdasdasdasd');
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/exercise?filter[meta_key]=id&filter[meta_value]=${id}`)
    .then((res) => {
      let b = [...res.data[0].acf.childexercises.map(v => v.a)];
      b = b.map((v) => {
        let result = v.split(';');
        const header = result.shift();
        result = result.map((v1) => {
          const c = v1.substring(1, v1.length - 1).split(',');
          c.pop();
          return ({ name: c[0], progression_model: c[1] });
        });
        b.length > 1 && result.push(header);
        return result;
      });
      dispatch(setSelectedExercises(b));
      dispatch(setSelectedExercisesQuery(false));
    })
    .catch(err => console.log(err));
};


export const getExerciseDetail = data => (dispatch) => {
  const { programmeID, progress, dayInWeek } = sessionStorage;
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/day_${dayInWeek}?filter[meta_key]=programmeid&filter[meta_value]=${programmeID}`)
    .then((res) => {
      console.log('getExerciseDetail', res);
      dispatch(setAllDayExercises(res.data));
      const haveExercise = getExerciseDetailByProgress(res.data, progress);
      if (typeof (haveExercise) === 'object') {
        sessionStorage.setItem('dayTableId', haveExercise.id);
        dispatch(setTodayExercises(haveExercise.acf));
        dispatch(finishExercisePageQuery(false));
        // check
        console.log('do something');
        return;
      }
      dispatch(createNewExercise({
        day: dayInWeek, exeLength: data.exeLength, programmeID, progress,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
};


export const getExercisesSample = baseInfo => (dispatch) => {
  const {
    location, path, days, dayInWeek,
  } = baseInfo;
  axios.get(`https://nepal.sk8tech.io/wp-json/acf/v3/${location}_${programmeTable[path]}_${days}?filter[meta_key]=day&filter[meta_value]=${dayInWeek}`)
    .then((res) => {
      console.log('sample', res);
      const data = handleExercise(res.data);
      dispatch(setUnselectedExercises(data));
      dispatch(finishDailyQuery(false));
    })
    .catch(err => console.log(err));
};


// Programme Page called

export const getCurrentProgram = getExe => (dispatch) => {
  axios.get(`/program?filter[author]=${sessionStorage.user_id}&orderby=date&order=desc`)
    .then((res) => {
      // if user do not have any programme page redirect to the questionnaire page
      if (res.data.length === 0) {
        dispatch(noProgram(true));
        return;
      }
      // the newest programme as the current programme
      const data = (res.data)[0].acf;
      console.log(data);
      const dayInWeek = getDayInWeek(data.progress, data.days);
      console.log(dayInWeek);
      const exercises = data[`day_${dayInWeek}_exe`] && data[`day_${dayInWeek}_exe`] !== '' ? dealStringToExerciseArray(data[`day_${dayInWeek}_exe`].split(';')) : [];
      sessionStorage.setItem('progress', data.progress);
      sessionStorage.setItem('dayInWeek', dayInWeek);
      sessionStorage.setItem('path', data.program_name);
      sessionStorage.setItem('location', data.exercise_place);
      sessionStorage.setItem('days', data.days);
      sessionStorage.setItem('programmeID', (res.data)[0].id);
      sessionStorage.setItem('finishDay', data.select_finish);
      sessionStorage.setItem('finish_for_day', data.finish_for_day);
      sessionStorage.setItem('ask_feedback', data.ask_feedback);
      sessionStorage.setItem('feedback_value', data.feedback_value);
      sessionStorage.setItem('workoutUpdateDate', data.updatedate);
      dispatch(setExercises(exercises));
      dispatch(finishQuery(false));
      dispatch(setHistoryProgramme([...res.data.map(v => ({ id: v.id, date: v.date, ...v.acf }))]));
      if (getExe) {
        const baseInfo = {
          location: data.exercise_place, path: data.program_name, days: data.days, dayInWeek,
        };
        console.log('getprogram', exercises.length);
        dispatch(getExercisesSample(baseInfo, exercises.length));
      } else {
        dispatch(finishDailyQuery(false));
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
      sessionStorage.setItem('workoutUpdateDate', res.data.acf.updatedate);
    })
    .catch(
      err => console.log(err),
    );
};

// create a new row at day_${number} table as a new record
export const createNewExercise = data => (dispatch) => {
  axios.post(`/day_${data.day}`, {
    fields: {
      exelength: data.exeLength, programmeid: data.programmeID, finish: false, progress: data.progress,
    },
    status: 'publish',
  })
    .then((res) => {
      sessionStorage.setItem('dayTableId', res.data.id);
      dispatch(finishExercisePageQuery(false));
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDailyExercises = data => (dispatch) => {
  // if users directly access this page, get program first
  if (data.length === 0) {
    dispatch(getCurrentProgram(true));
    console.log('progress is null');
    return;
  }
  const {
    days, location, path, dayInWeek, finishDay,
  } = sessionStorage;
  const baseInfo = {
    location,
    path,
    days,
    dayInWeek,
  };
  console.log('progress is not null');
  dispatch(getExercisesSample(baseInfo));
};

export const userKeepExercise = (data, fin) => (dispatch) => {
  const pass = fin ? {
    fields: {
      [`day_${sessionStorage.dayInWeek}_exe`]: data,
      select_finish: sessionStorage.dayInWeek,
    },
  } : {
    fields: {
      [`day_${sessionStorage.dayInWeek}_exe`]: data,
    },
  };
  axios.post(`/program/${sessionStorage.programmeID}`, pass)
    .then((res) => {
      const exercises = dealStringToExerciseArray(res.data.acf[`day_${sessionStorage.dayInWeek}_exe`].split(';'));
      dispatch(setExercises(exercises));
      dispatch(finishDailyQuery(false));
      sessionStorage.setItem('finishDay', res.data.acf.select_finish);
      sessionStorage.setItem('workoutUpdateDate', res.data.acf.updatedate);
      console.log(res.data.acf.day_1_exe);
    })
    .catch(err => console.log(err));
};

// Exercise page on saving button click update exercise data
export const updataOneExercise = data => (dispatch) => {
  const { dayInWeek, dayTableId } = sessionStorage;
  axios.post(`/day_${dayInWeek}/${dayTableId}`, { fields: { [`exe_${data.exeNum}`]: data.exeData } })
    .then((res) => {
      dispatch(setTodayExercises(res.data.acf));
      dispatch(finishExercisePageQuery(false));
      console.log(res.data.acf);
    })
    .catch(res => console.log(res));
};

// When user finish final exercise update program
export const finishAllDailyExercises = data => (dispatch) => {
  axios.post(`/program/${sessionStorage.programmeID}`, { fields: { finish_for_day: true } })
    .then((res) => {
      console.log(res);
      sessionStorage.setItem('finish_for_day', true);
      sessionStorage.setItem('workoutUpdateDate', res.data.acf.updatedate);
    })
    .catch(err => console.log(err));
};

// When user finish daily questionnaire select
export const selectDailyQuestionnaire = (data, callback) => (dispatch) => {
  axios.post(`/program/${sessionStorage.programmeID}`, {
    fields: {
      feedback_value: data, progress: ~~sessionStorage.progress + 1, finish_for_day: false, updatedate: new Date().toDateString(),
    },
  })
    .then((res) => {
      console.log(res);
      sessionStorage.setItem('finish_for_day', false);
      sessionStorage.setItem('progress', ~~sessionStorage.progress + 1);
      sessionStorage.setItem('workoutUpdateDate', res.data.acf.updatedate);
      callback();
    })
    .catch(err => console.log(err));
};

/*
  When user click the button on the top left corner for showing the history of this specific exercise in the programme
*/
export const getThisExerciseHistory = input => (dispatch) => {
  axios.get(`/day_${sessionStorage.dayInWeek}?filter[meta_key]=programmeid&filter[meta_value]=${sessionStorage.programmeID}&orderby=date&order=desc`)
    .then((res) => {
      const data = res.data.length === 0 ? [] : res.data.map(v => ({
        date: v.date, exe: v.acf[`exe_${input}`],
      }));
      dispatch(setSpecificExericseHistory(data));
      console.log(res);
    })
    .catch(err => console.log(err));
};

// History page get recorded
export const getExerciseHistory = input => (dispatch) => {
  axios.get(`/day_${input.day}?filter[meta_key]=programmeid&filter[meta_value]=${input.programmeID}&orderby=date&order=asc`)
    .then((res) => {
      console.log(res);
      const a = [].concat(JSON.parse(JSON.stringify(input.currentData)));
      a[input.day - 1] = res.data;
      console.log(a);
      dispatch(setHistoryForSpecificProgramme(a));
      dispatch(finishHistoryQuery(false));
    })
    .catch(err => console.log(err));
};

export const getYoutubeLink = name => (dispatch) => {
  axios.get(`/youtube_seacrch?filter[meta_key]=exercies_name&filter[meta_value]=${name}`)
    .then(
      (res) => {
        console.log(res.data[0].acf.youtubeshortcode);
        const result = res.data[0];
        if (result) {
          const { acf } = result;
          const n = [acf.youtubeshortcode, acf.youtubelongcode];
          dispatch(setYoutubeLink(n));
        }
      },
    )
    .catch(
      (err) => {
        console.log(err);
      },
    );
};
