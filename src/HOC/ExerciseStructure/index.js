/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import History from './history';
import NumberSelect from '../numberSelect';
import ExListItem from './ListItem';
import YoutubeDialog from './youtubeDialog';
import ProgressBar from './ProgressBar';
import { VIDEO_URL } from '../../config';


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
    whiteSpace: 'normal',
    textAlign: 'center',
  },
  progressBar: {
    width: '100%',
    justify: 'center',
    alignItems: 'center',
  },
});

const ExerciseStructure = (props) => {
  const {
    classes, select, ExList, onSaveClick, youtbueID, onOpen, finishCurrentExercise,
    dailyExerciseLength, rehab, onClose, youtubeOpenStatus, title,
    history, thisExerciseDetail, currentExerciseOrder, onFinishAllExercise,
    historyForSpecificExercise, needHistory, largest, getYoutubeLink, onPlayVideo,
    onPauseVideo, playing, youtubeDiscription,
  } = props;
  const onYoutubeOpen = () => {
    onPauseVideo && onPauseVideo();
    onOpen('youtube');
  };
  const onYoutubeClose = () => {
    onPlayVideo && onPlayVideo();
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
        flex: 1, overflowY: 'hidden', whiteSpace: 'nowrap',
      }}
      wrap="nowrap"
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={24}
    >
      {(
        <YoutubeDialog
          title={title}
          open={!!youtubeOpenStatus}
          onYoutubeClose={onYoutubeClose}
          youtbueID={youtbueID}
          getYoutubeLink={getYoutubeLink}
          youtubeDiscription={youtubeDiscription}
        />
      )}
      {!needHistory && (
      <History
        title={title}
        onHistoryClose={onHistoryClose}
        history={history}
        historyForSpecificExercise={historyForSpecificExercise}
      />
      )}
      <Grid container item>
        <Card style={{
          width: '100%', height: '25vh', borderRadius: '10px', position: 'relative',
        }}
        >
          {!needHistory && (
          <div className={classes.card} onClick={onHistoryOpen} style={{ backgroundColor: 'unset' }}>
            <HistoryIcon style={{ fontSize: '30px' }} color="primary" />
          </div>
          )}
          {(
            <div className={classes.card} onClick={onYoutubeOpen} style={{ bottom: '0', backgroundColor: 'unset' }}>
              <PlayCircleIcon color="primary" style={{ fontSize: '30px' }} />
            </div>
          )}
          <Card color="primary" className={classes.card} style={{ right: '0' }}>
            <Typography className={classes.inlineT} color="secondary">{`${thisExerciseDetail ? thisExerciseDetail.sets : 0}`} X</Typography>
            <Typography className={classes.inlineT} color="secondary">{`${thisExerciseDetail ? thisExerciseDetail.reps : 0}`}</Typography>
          </Card>
          <YouTubePlayer
            url={`${VIDEO_URL}${youtbueID[0]}`}
            playing={playing}
            controls={false}
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: {
                  playlist: youtbueID[0],
                  modestbranding: 1,
                  showinfo: 0,
                  autoplay: 1,
                  controls: 0,
                  fs: 0,
                  loop: 1,
                  rel: 0,
                  iv_load_policy: 3,
                },
              },
            }}
          />
        </Card>
      </Grid>

      <Grid container item style={{ minHeight: '30vh' }}>
        <List component="nav" style={{ width: '100%' }}>
          {(!ExList || ExList.length === 0)
            ? (
              <Typography style={{
                weight: '100%',
                textAlign: 'center',
              }}
              >Follow the Video to exercise, Add Set once Completed.
              </Typography>
            )
            : ExList.map((v, k) => (
              <ExListItem
                key={`${v.reps}${k}`}
                id={k}
                latest={k === ExList.length - 1}
                content={(v.hasOwnProperty('weight') && !!v.weight) ? `${v.weight} Kgs X ${v.reps} ${thisExerciseDetail.time ? 'secs' : ''} Reps` : `${v.reps}   ${thisExerciseDetail.time ? 'secs' : ''} Reps`}
                status="Previous"
                product={largest === ((v.hasOwnProperty('weight') && !!v.weight) ? 1 * v.weight * v.reps : 1 * v.reps)}
              />
            ))}
        </List>
      </Grid>

      <Grid style={{ height: '25vh' }} container item justify="flex-end" direction="column" alignItems="stretch">
        <ProgressBar
          message
          thisExerciseDetail={thisExerciseDetail}
          ExList={ExList}
          history={historyForSpecificExercise}
          progress={thisExerciseDetail && ExList ? (ExList.length / thisExerciseDetail.sets) * 100 : 0}
        />

        <Grid style={{ minHeight: '20px' }}>
          {(!!select && Object.keys(thisExerciseDetail).length !== 0 && !finishCurrentExercise) && select.map(v => ((v.label === 'weight'
            ? (thisExerciseDetail.progression_model.toUpperCase().includes('LINEAR') || thisExerciseDetail.progression_model.toUpperCase().includes('DOUBLE'))
            : true)
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
                  ? <Button fullWidth variant="contained" color="primary" component={Link} to={rehab ? `/rehab/training/${currentExerciseOrder * 1 + 1}` : `/workout/exercise/${currentExerciseOrder * 1 + 1}`}><Typography color="secondary">FINISHED! Next</Typography></Button>
                  : <Button fullWidth variant="contained" color="primary" onClick={onFinishAllExercise}><Typography color="secondary">FINISHED! Next</Typography></Button>
              )
              : <Button fullWidth variant="contained" color="primary" onClick={onSaveClick}><Typography color="secondary">SAVE</Typography></Button>
          }
        </Grid>
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
