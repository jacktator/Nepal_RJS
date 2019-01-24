import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BottomMsg extends React.Component {
  // week-week progression
  homeWeekProgression(reps, history, goal_ini, type, sets) {
    console.log('history', history);

    // have at least one-day history without error
    if (history && !(history.length == 1 && !--[0].exe)) {
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

  // set-set progression
  homeProgression(ExList, sets, reps, history) {
    console.log("Home--ExList", ExList);
    const goal_ini = sets * reps.split(" ")[0];
    const type = reps.split(" ").length;
    console.log("goal_ini", goal_ini);

    //new reps will be changed based on last week
    const new_reps = this.homeWeekProgression(reps, history, goal_ini, type, sets);

    // at least one set done
    if (ExList) {
      // finish exercise
      if (ExList.length == sets) {
        return('Well done !');
      // last set begins
      } if (ExList.length == sets - 1) {
        return('Last Set - Do as many reps as possible !');
      // others
      } else {
        return(`Set ${ExList.length + 1} - Aim at ${new_reps}`);
      }
    }
    return(`Set 1 - Aim at ${new_reps}`);
  }

  // set-set progression
  linearProgression(ExList, reps, sets, weight) {
    return ('Do as much as possible !');
  }

  doubleProgression() {
    return ('Do as much as possible !');
  }

  checkProgression(model, ExList, sets, reps, weight, history) {
    if (model.toUpperCase().includes('LINEAR')) {
      console.log('Linear',model);
      return(this.linearProgression(ExList, sets, reps, weight));
    } if (model.toUpperCase().includes('DOUBLE')) {
      console.log('Double',model);
      return(this.doubleProgression());
    } else if (model.toUpperCase().includes('HOME')) {
      console.log('Home',model);
      return(this.homeProgression(ExList, sets, reps, history));
    } else {
      console.log('Other',model);
      // finish exercise
      if (ExList && ExList.length == sets) {
        return('Well done !');
      }
      return('Do as much as possible !');
    }
  }

  render() {
    const {
 classes, thisExerciseDetail, ExList, history 
} = this.props;
    const {
 progression_model, sets, reps, weight 
} = thisExerciseDetail;
    console.log('Bmsg/thisExerciseDetail', this.props.thisExerciseDetail);
    return (
      <div className={classes.root}>
        <Typography align="center" variant="body1" component="h6" color="textPrimary">
          {progression_model 
            ? this.checkProgression(progression_model, ExList, sets, reps, weight, history) : 'Do as much as possible !'}
        </Typography>
      </div>
    );
  }
}

BottomMsg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomMsg);
