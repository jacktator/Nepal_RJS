import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import History from './history';
import NumberSelect from '../numberSelect';
import ExListItem from './ListItem';
import Youtube from './youtubeDialog';

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
  inlineT: {
    fontSize: '0.6rem',
    lineHeight: 1,
    letterSpacing: 0,
  },
});

const ExerciseStructure = (props) => {
  const {
    classes, select, ExList, onSaveClick, youtbueID, onOpen, finishCurrentExercise, dailyExerciseLength,
    onClose, youtubeOpenStatus, title, history, thisExerciseDetail, currentExerciseOrder, onFinishAllExercise,
  } = props;
  const onYoutubeOpen = () => {
    onOpen('youtube');
  };
  const onYoutubeClose = () => {
    onClose('youtube');
  };
  const onHistoryClose = () => {
    onClose('history');
  };
  const onHistoryOpen = () => {
    onOpen('history');
  };
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
      <Youtube
        title={title}
        open={!!youtubeOpenStatus}
        onYoutubeClose={onYoutubeClose}
        youtbueID={youtbueID}
      />
      <History
        title={title}
        onHistoryClose={onHistoryClose}
        history={history}
      />
      <Grid container item>
        <Card style={{
          width: '100%', height: '25vh', borderRadius: '10px', position: 'relative',
        }}
        >
          <div className={classes.card} onClick={onHistoryOpen} style={{ backgroundColor: 'unset' }}>
            <HistoryIcon style={{ fontSize: '30px' }} color="primary" />
          </div>
          <div className={classes.card} onClick={onYoutubeOpen} style={{ bottom: '0', backgroundColor: 'unset' }}>
            <PlayCircleIcon color="primary" style={{ fontSize: '30px' }} />
          </div>
          <Card color="primary" className={classes.card} style={{ right: '0' }}>
            <Typography className={classes.inlineT} color="secondary">{`${thisExerciseDetail ? thisExerciseDetail.sets : 0}`}</Typography>
            <Typography className={classes.inlineT} color="secondary">X</Typography>
            <Typography className={classes.inlineT} color="secondary">{`${thisExerciseDetail ? thisExerciseDetail.reps : 0}`}</Typography>
          </Card>
          <CardMedia
            style={{ height: '100%', width: '100%' }}
            image="/image/exerciseGif.gif"
          />
        </Card>
      </Grid>

      <Grid container item direction="column" alignItems="stretch">
        <Grid>
          {!!select && select.map(v => ((v.label === 'weight' ? (!!thisExerciseDetail.weight) : true)
            && (
            <NumberSelect
              key={v.label}
              minClickHandle={v.min}
              addClickHandle={v.add}
              value={v.value}
              label={v.label}
            />
            )
          ))}
        </Grid>
        <Grid>
          {
            // eslint-disable-next-line no-nested-ternary
            finishCurrentExercise
              ? (
                currentExerciseOrder * 1 < dailyExerciseLength
                  ? <Button fullWidth variant="contained" color="primary" component={Link} to={`/workout/exercise/${currentExerciseOrder * 1 + 1}`}><Typography color="secondary">FINISH</Typography></Button>
                  : <Button fullWidth variant="contained" color="primary" onClick={onFinishAllExercise}><Typography color="secondary">FINISH</Typography></Button>
              )
              : <Button fullWidth variant="contained" color="primary" onClick={onSaveClick}><Typography color="secondary">SAVE</Typography></Button>
          }
        </Grid>
      </Grid>

      <Grid container item>
        <List component="nav" style={{ width: '100%' }}>
          {!!ExList && ExList.map((v, k) => (
            <ExListItem
              key={`${v.reps}${k}`}
              id={k}
              latest={k === ExList.length}
              content={(v.hasOwnProperty('weight') && !!v.weight) ? `weight  ${v.weight}  reps  ${v.reps}` : `reps  ${v.reps}`}
              status="p"
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
};

ExerciseStructure.defaultProps = {
  select: [],
};

export default withStyles(styles)(ExerciseStructure);
