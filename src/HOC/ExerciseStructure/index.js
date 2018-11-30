import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, List, Typography, Paper, Grid,
} from '@material-ui/core';
import NumberSelect from '../numberSelect';
import ExListItem from './ListItem';

const ExerciseStructure = (props) => {
  const { select, ExList } = props;
  return (
    <Grid
      container
      item
      style={{
        flex: 1, overflowY: 'scroll', whiteSpace: 'nowrap',
      }}
      wrap="nowrap"
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={24}
    >
      <Grid container item>
        <Paper style={{ width: '100%', height: '25vh', borderRadius: '10px' }}>
          this is video
        </Paper>
      </Grid>
      <Grid container item direction="column" alignItems="stretch">
        <Grid>
          {!!select && select.map(v => (
            <NumberSelect
              key={v.label}
              minClickHandle={v.min}
              addClickHandle={v.add}
              value={v.value}
              label={v.label}
            />
          ))}
        </Grid>
        <Grid><Button fullWidth variant="contained" color="primary" disableTouchRipple><Typography color="secondary">SAVE</Typography></Button></Grid>
      </Grid>
      <Grid container item>
        <List component="nav" style={{ width: '100%' }}>
          {!!ExList && ExList.map((v, k) => (
            <ExListItem
              key={v.content}
              id={k}
              latest={v.latest}
              content={v.content}
              status={v.status}
            />
          ))
}
        </List>
      </Grid>
    </Grid>
  );
};

ExerciseStructure.propTypes = {
  select: PropTypes.array,
  ExList: PropTypes.array,
};

ExerciseStructure.defaultProps = {
  select: [],
  ExList: [],
};

export default ExerciseStructure;
