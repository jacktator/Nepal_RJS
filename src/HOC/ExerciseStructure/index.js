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
import ReactPlayer from 'react-player';
import History from './history';
import NumberSelect from '../numberSelect';
import ExListItem from './ListItem';
import YoutubeDialog from './youtubeDialog';
import ProgressBar from './ProgressBar';
import { IMAGE_URL, VIDEO_URL } from '../../config';

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
    historyForSpecificExercise, needYoutube, needHistory, largest, imageLink,
    getYoutubeLink,
  } = props;
  const opts = {
    width: '100%',
    height: '100%',
    playing: true,
    playerVars: {
      autoplay: 1,
      player: 1,
    },
  };
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
      {!needYoutube && (
      <YoutubeDialog
        title={title}
        open={!!youtubeOpenStatus}
        onYoutubeClose={onYoutubeClose}
        youtbueID={youtbueID}
        getYoutubeLink={getYoutubeLink}
        queryName={`${IMAGE_URL}${thisExerciseDetail.id}${`${thisExerciseDetail.name}`.replace(/ /g, '-')}.gif`}
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
          {!needYoutube && (
          <div className={classes.card} onClick={onYoutubeOpen} style={{ bottom: '0', backgroundColor: 'unset' }}>
            <PlayCircleIcon color="primary" style={{ fontSize: '30px' }} />
          </div>
          )}
          <Card color="primary" className={classes.card} style={{ right: '0' }}>
            <Typography className={classes.inlineT} color="secondary">{`${thisExerciseDetail ? thisExerciseDetail.sets : 0}`} X</Typography>
            <Typography className={classes.inlineT} color="secondary">{`${thisExerciseDetail ? thisExerciseDetail.reps : 0}`}</Typography>
          </Card>
          <ReactPlayer
            // videoId={`${thisExerciseDetail.video_link}`}
            // opts={opts}
            url={`${VIDEO_URL}${thisExerciseDetail.video_link}`}
            // eslint-disable-next-line react/jsx-boolean-value
            playing={true}
            // eslint-disable-next-line react/jsx-boolean-value
            loop={true}
            controls={false}
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          {/* <CardMedia
            style={{ height: '100%', width: '100%' }}
            component="video"
            image={rehab ? `${IMAGE_URL}${imageLink}-${`${thisExerciseDetail.name}`.replace(/ /g, '-')}.gif` : `${IMAGE_URL}${thisExerciseDetail.id}${`${thisExerciseDetail.name}`.replace(/ /g, '-')}.gif`}
            src={rehab ? `${IMAGE_URL}${imageLink}-${`${thisExerciseDetail.name}`.replace(/ /g, '-')}.gif` : `${VIDEO_URL}${thisExerciseDetail.video_link}`}
            src="https://www.youtube.com/watch?v=IODxDxX7oi4"
          /> */}
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
                  ? <Button fullWidth variant="contained" color="primary" component={Link} to={rehab ? `/rehab/training/${currentExerciseOrder * 1 + 1}` : `/workout/exercise/${currentExerciseOrder * 1 + 1}`}><Typography color="secondary">FINISH</Typography></Button>
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
              latest={k === ExList.length - 1}
              content={(v.hasOwnProperty('weight') && !!v.weight) ? `weight  ${v.weight} reps  ${v.reps} ${thisExerciseDetail.time ? 'secs' : ''}` : `reps  ${v.reps}   ${thisExerciseDetail.time ? 'secs' : ''}`}
              status="Previous"
              product={largest === ((v.hasOwnProperty('weight') && !!v.weight) ? 1 * v.weight * v.reps : 1 * v.reps)}
            />
          ))}
        </List>
      </Grid>

      <Grid container item component="div" className={classes.progressBar}>
        <ProgressBar
          message
          thisExerciseDetail={thisExerciseDetail}
          ExList={ExList}
          history={historyForSpecificExercise}
          progress={thisExerciseDetail && ExList ? (ExList.length / thisExerciseDetail.sets) * 100 : 0}
        />
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
