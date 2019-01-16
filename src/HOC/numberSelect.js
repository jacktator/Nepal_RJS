import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const add = name => (state, props) => {
  if (state[name] < 100) {
    return ({
      [name]: state[name] + 1,
    });
  }
  return { state };
};

export const min = name => (state, props) => {
  if (state[name] > 1) {
    return ({
      [name]: state[name] - 1,
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
        <IconButton name="min" onClick={minClickHandle} color="primary" >
          <RemoveIcon />
        </IconButton>
        <Chip
          label={<Typography color="secondary">{value}</Typography>}
          color="primary"
        />
        <IconButton name="add" onClick={addClickHandle} color="primary" >
          <AddIcon />
        </IconButton>
      </Grid>
      
    </Grid>
  );
};

NumberSelect.propTypes = {
  minClickHandle: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  addClickHandle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default NumberSelect;
