import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import NumberSelect from '../numberSelect';
import ExListItem from './ListItem';

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    height: '12vmin',
    width: '12vmin',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const ExerciseStructure = (props) => {
  const { classes, select, ExList } = props;
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
        <Paper style={{
          width: '100%', height: '25vh', borderRadius: '10px', position: 'relative',
        }}
        >
          <div
            className={classes.card}
            style={{ backgroundColor: 'unset' }}
          >
            <HistoryIcon style={{ fontSize: '30px' }} color="primary" />
          </div>
          <div
            className={classes.card}
            style={{ bottom: '0', backgroundColor: 'unset' }}
          >
            <PlayCircleIcon color="primary" style={{ fontSize: '30px' }} />
          </div>
          <Card
            color="primary"
            className={classes.card}
            style={{ right: '0' }}
          >
            <Typography color="secondary">3X</Typography>
            <Typography color="secondary">12X12</Typography>
          </Card>
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
        <Grid>
          <Button fullWidth variant="contained" color="primary" disableTouchRipple>
            <Typography color="secondary">SAVE</Typography>
          </Button>
        </Grid>
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
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

ExerciseStructure.propTypes = {
  classes: PropTypes.object.isRequired,
  select: PropTypes.array,
  ExList: PropTypes.array,
};

ExerciseStructure.defaultProps = {
  select: [],
  ExList: [],
};

export default withStyles(styles)(ExerciseStructure);
