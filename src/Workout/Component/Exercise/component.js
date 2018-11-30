import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Paper, Grid, TextField,
} from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';
import NumberSelect, { add, min } from '../../../HOC/numberSelect';
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
    const { weight, sets } = this.state;
    return (
      <Grid
        container
        item
        style={{
          flex: 1, overflowY: 'scroll', whiteSpace: 'nowrap', padding: '5vmin 5vmin 5vmin',
        }}
        wrap="nowrap"
        direction="column"
        justify="space-around"
        alignItems="stretch"
      >
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
              value={weight}
              label="weight"
            />
            <NumberSelect
              minClickHandle={this.setsMin}
              addClickHandle={this.setsAdd}
              value={sets}
              label="sets"
            />
          </Grid>
          <Grid><Button fullWidth variant="contained" color="primary" disableTouchRipple><Typography color="secondary">SAVE</Typography></Button></Grid>
        </Grid>
        <Grid container item>
          <List component="nav" style={{ width: '100%' }}>
            <ListItem divider>
              <ListItemText primary="1" />
              <ListItemIcon><CheckCircle /></ListItemIcon>
              <ListItemText primary="10 weight X 10 sets" />
              <ListItemText primary="Previous" />
            </ListItem>
            <ListItem divider>
              <ListItemText primary="1" />
              <ListItemIcon><CheckCircle /></ListItemIcon>
              <ListItemText primary="10 weight X 10 sets" />
              <ListItemText primary="Previous" />
            </ListItem>
            <ListItem divider>
              <ListItemText primary="1" />
              <ListItemIcon><CheckCircle /></ListItemIcon>
              <ListItemText primary="10 weight X 10 sets" />
              <ListItemText primary="Previous" />
            </ListItem>

          </List>
        </Grid>
      </Grid>
    );
  }
}

ExerciseComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExerciseComponent);
