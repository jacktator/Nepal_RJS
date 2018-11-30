import React from 'react';
import PropTypes from 'prop-types';
import {
  Chip, Typography, Grid, IconButton,
} from '@material-ui/core';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';

export const add = name => (state, props) => {
  if (state[name] < 100) {
    return ({
      [name]: state[name] + props.step,
    });
  }
  return { state };
};

export const min = name => (state, props) => {
  if (state[name] >= props.step) {
    return ({
      [name]: state[name] - props.step,
    });
  }
  return { state };
};

const NumberSelect = (props) => {
  const {
    minClickHandle, value, addClickHandle, label,
  } = props;
  return (
    <Grid container item justify="space-around" alignItems="center">
      <Grid item xs={3}>
        <Typography variant="button">{label}</Typography>
      </Grid>
      <Grid item>
        <IconButton name="min" onClick={minClickHandle} color="primary" disableTouchRipple>
          <Remove />
        </IconButton>
        <Chip
          label={<Typography color="secondary">{value}</Typography>}
          color="primary"
        />
        <IconButton name="add" onClick={addClickHandle} color="primary" disableTouchRipple>
          <Add />
        </IconButton>

      </Grid>
    </Grid>
  );
};

export default NumberSelect;
