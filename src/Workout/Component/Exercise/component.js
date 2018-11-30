import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Paper, Grid, TextField,
} from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import NumberSelect from '../../../HOC/numberSelect';
import { add, min } from '../../../HOC/numberSelect';
import { styles } from '../../styles';

class ExerciseComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      sets: 0,
    };
    this.weightAdd = this.weightAdd.bind(this);
    this.weightMin = this.weightMin.bind(this);
    this.setsAdd = this.setsAdd.bind(this);
    this.setsMin = this.setsMin.bind(this);
  }

  weightAdd() {
    this.setState(add('weight'));
  }

  weightMin() {
    this.setState(min('weight'));
  }

  setsAdd() {
    this.setState(add('sets'));
  }

  setsMin() {
    this.setState(min('sets'));
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container item style={{ flex: 1, overflowY: 'scroll', padding: '5vmin 5vmin 5vmin' }} direction="column" justify="space-around" alignItems="stretch">
        <Grid container item>
          <Paper style={{ width: '100%', height: '25vh', borderRadius: '10px' }}>
          this is video
          </Paper>
        </Grid>
        <Grid container item direction="column" alignItems="stretch">
          <Grid>
            <NumberSelect
              minClickHandle={this.weightMin}
              addClickHandle={this.weightAdd}
              value={this.state.weight}
              label="weight"
            />
            <NumberSelect
              minClickHandle={this.setsMin}
              addClickHandle={this.setsAdd}
              value={this.state.sets}
              label="sets"
            />
          </Grid>
          <Grid>button2</Grid>
        </Grid>
        <Grid container item />
      </Grid>
    );
  }
}

ExerciseComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExerciseComponent);
