import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

// linea rules
// const linearSetRule = [-10,-7.5,-7.5,-5,-5,-2.5,-2.5,0,0,0,0,2.5,2.5,5];
// const linearWeekRule = [-10,-7.5,-7.5,-5,-2.5,-2.5,0,0,2.5,2.5,5,5,5,7.5];

class BottomMsg extends React.Component {
  // week-week home progression
  homeWeekProgression(reps, history, goal_ini, type, sets) {
    console.log('history', history);

    // have at least one-day history without error
    if (history && !(history.length === 1 && history[0].exe)) {
      const his = [];
      for (let i = 0; i < history.length; i++) {
        history[i].exe && his.push(history[i].exe.split(';'));
      }
      console.log('hhhhhhhhh', his);

      // calculate total last weeks
      const total = [];
      for (let j = 0; j < his.length; j++) {
        let total_week = 0;
        for (let k = 0; k < his[j].length; k++) {
          total_week += 1 * his[j][k].substring(1, his[j][k].length - 1);
        }
        console.log('total_week', total_week);
        total.push(total_week);
      }
      console.log('total', total);

      // calculate new goal
      let goal = goal_ini;
      for (let i = 0; i < total.length; i++) {
        goal += total[i] >= goal ? sets * type * 5 : 0;
      }
      goal /= sets;
      console.log('new_goal', goal);
      // return new reps here, type1 reps, type2 time
      return (type === 1 ? goal : `${goal} sec`);
    }
    // no history, keep the original reps
    return reps;
  }

  // set-set home progression
  homeProgression(ExList, sets, reps, history) {
    console.log('Home--ExList', ExList);

    // finish exercise
    if (ExList && ExList.length === sets) {
      return ('Well done !');
    }

    // if home exercises has 'till failture'
    if (!/^[0-9]*$/.test(reps.split(' ')[0])) {
      return ('Do as much as possible !');
    }
    const goal_ini = sets * reps.split(' ')[0];
    const type = reps.split(' ').length;
    console.log('goal_ini', goal_ini);

    // new reps will be changed based on last week
    const new_reps = this.homeWeekProgression(reps, history, goal_ini, type, sets);

    // at least one set done
    if (ExList) {
      // last set begins
      if (ExList.length === sets - 1) {
        return ('Last Set - Do as many reps as possible !');
      }
      // others
      return (`Set ${ExList.length + 1} - Aim at ${new_reps}`);
    }
    return (`Set 1 - Aim at ${new_reps}`);
  }

  // set-set linear progression
  linearProgression(ExList, sets, reps, history) {
    // all weight comes from history, not prescribed
    console.log('Linear--ExList', ExList);

    // finish exercise
    if (ExList && ExList.length === sets) {
      return ('Well done !');
    }

    // if linear exercises has 'till failture'
    if (!/^[0-9]*$/.test(reps.split('-')[0])) {
      return ('Do as much as possible !');
    }
    // min reps in range
    const goal_ini = reps.split('-')[0];
    console.log('goal_ini', goal_ini);

    // new reps will be changed based on last week
    const isWeekChange = ExList && ExList.length > 0 ? false:true;
    const new_msg = this.linearWeekProgression(history, goal_ini, isWeekChange);

    // at least one set done
    if (ExList) {
      // last set begins
      if (ExList.length === sets - 1) {
        return (`Last Set - Do as many reps as possible with ${new_msg}`);
      }
      // others
      return (`Set ${ExList.length + 1} - Aim for ${new_msg} ${goal_ini} reps`);
    }
    return (`Set 1 - Aim for ${new_msg} ${goal_ini} reps`);
  }

  // week-week linear progression
  linearWeekProgression(history, goal_ini, isWeekChange) {
    console.log('check linear week progression');
    console.log('history', history);

    // have at least one-day history without error
    if (history && !(history.length === 1 && !history[0].exe)) {
      const his = [];
      for (let i = 0; i < history.length; i++) {
        history[i].exe && his.push(history[i].exe.split(';'));
      }
      console.log('hhhhhhhhh', his);

      const changeRule = isWeekChange ? [-10,-7.5,-7.5,-5,-2.5,-2.5,0,0,2.5,2.5,5,5,5,7.5] : [-10,-7.5,-7.5,-5,-5,-2.5,-2.5,0,0,0,0,2.5,2.5,5];

      // compare with goal
      if (his.length && his[his.length - 1]) {
        // compare with the last history
        const len = his[his.length - 1].length;
        console.log('aaaaaaaaaaa0', his[his.length - 1][len - 1].substring(1, his[his.length - 1][len - 1].length - 1));
        // old weight value + modification value
        const last_history = his[his.length - 1][len - 1].substring(1, his[his.length - 1][len - 1].length - 1).split(',');
        const old_weight = parseInt(last_history[1]);
        const new_index = parseInt(last_history[0]) - goal_ini + 7;
        const new_weight = old_weight + changeRule[new_index >= 0 && new_index <= 13 ? new_index:(new_index < 0 ? 0:13)];
        const new_msg = new_weight >= 0 ? `${new_weight} Kg` : '0 Kg';
        return (new_msg);
      }
      // no correct exe values
      return ('');
    }
    // no history, keep the original weight
    return ('');
  }

  // week-week double progression
  doubleWeekProgression(history, goal_ini) {
    console.log('check double week progression');
    console.log('history', history);

    // have at least one-day history without error
    if (history && !(history.length === 1 && !history[0].exe)) {
      const his = [];
      for (let i = 0; i < history.length; i++) {
        history[i].exe && his.push(history[i].exe.split(';'));
      }
      console.log('hhhhhhhhh', his);

      // compare with goal
      if (his.length && his[his.length - 1]) {
        const len = his[his.length - 1].length;
        console.log("aaaaaaaaaaa0", his[his.length - 1][len - 1].substring(1, his[his.length - 1][len - 1].length - 1));
        const new_msg = (his[his.length - 1][len - 1].substring(1, his[his.length - 1][len - 1].length - 1) >= goal_ini) ? 'Increase the weight' : 'Do more reps';
        return new_msg;
      }
      // no correct exe values
      return (`Aim at ${goal_ini} reps`);
    }
    // no history, keep the original reps
    return (`Aim at ${goal_ini} reps`);
  }

  // set-set double progression
  doubleProgression(ExList, sets, reps, history) {
    console.log('Double--ExList', ExList);

    // finish exercise
    if (ExList && ExList.length === sets) {
      return ('Well done !');
    }

    // if double exercises has 'till failture'
    if (!/^[0-9]*$/.test(reps.split('-')[0])) {
      return ('Do as much as possible !');
    }
    // max reps in range
    const goal_ini = reps.split('-')[1];
    console.log('goal_ini', goal_ini);

    // new reps will be changed based on last week
    const new_msg = this.doubleWeekProgression(history, goal_ini);

    // at least one set done
    if (ExList) {
      // last set begins
      if (ExList.length === sets - 1) {
        return ('Last Set - Do as many reps as possible !');
      // others
      }
      return (`Set ${ExList.length + 1} - ` + new_msg);
    }
    return ('Set 1 - ' + new_msg);
  }

  checkProgression(model, ExList, sets, reps, history) {
    //TO DO
    // week 5 deload week

    if (model.toUpperCase().includes('LINEAR')) {
      console.log('Linear', model);
      return (this.linearProgression(ExList, sets, reps, history));
    } if (model.toUpperCase().includes('DOUBLE')) {
      console.log('Double', model);
      return (this.doubleProgression(ExList, sets, reps, history));
    } if (model.toUpperCase().includes('HOME')) {
      console.log('Home', model);
      return (this.homeProgression(ExList, sets, reps, history));
    }
    console.log('Other', model);
    // finish exercise
    if (ExList && ExList.length === sets) {
      return ('Well done !');
    }
    return ('Do as much as possible !');
  }

  render() {
    const {
      classes, thisExerciseDetail, ExList, history,
    } = this.props;
    const {
      progression_model, sets, reps,
    } = thisExerciseDetail;
    console.log('Bmsg/thisExerciseDetail', this.props.thisExerciseDetail);
    return (
      <div className={classes.root}>
        <Typography align="center" variant="body1" component="h6" color="textPrimary">
          {progression_model
            ? this.checkProgression(progression_model, ExList, parseInt(sets), reps, history) : 'Do as much as possible !'}
        </Typography>
      </div>
    );
  }
}

BottomMsg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomMsg);
