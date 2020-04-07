/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import { styles } from '../../styles';
import { IMAGE_URL } from '../../../config';

class HOCListItem extends React.PureComponent {
  render() {
    const {
      theme, data, handleOpenDialog, id, userKeepExercise, midSelectExercise, listID,
    } = this.props;
    const tstyles = styles(theme);
    const {
      feedback, icon_link, image_link, name, progression_model, reps, sets, video_link,
    } = data;
    const finalName = midSelectExercise.length >= listID + 1 && !!midSelectExercise[listID] ? midSelectExercise[listID].name : name;
    return (
      <ListItem divider>
        <Grid container style={tstyles.listItemPaper} component={!data.workout ? Link : 'div'} to={`/workout/exercise/${listID + 1}`}>

          <Grid container style={tstyles.itemleft} justify="flex-start" alignContent="space-around" alignItems="center">
            <Card style={Object.assign({ position: 'relative', alignItems: 'center' }, tstyles.picturePlaceholder)}>
              <CardMedia
                style={{
                  height: '98%',
                  width: '98%',
                  backgroundSize: 'cover',
                  position: 'absolute',
                  zIndex: '10',
                  filter: 'blur(3px) opacity(0.6)',
                }}
                component="img"
                onError={(event) => {
                  event.target.src = 'https://am.sk8.tech/wp-content/uploads/placeholder.png';
                }}
                image={`${IMAGE_URL}${id}${`${finalName}`.replace(/ /g, '-')}.png`}
              />

              <CardMedia
                style={{
                  height: '100%',
                  width: 'auto',
                  backgroundSize: 'cover',
                  zIndex: '20',
                }}
                component="img"
                onError={(event) => {
                  event.target.src = 'https://am.sk8.tech/wp-content/uploads/placeholder.png';
                }}
                image={`${IMAGE_URL}${id}${`${finalName}`.replace(/ /g, '-')}.png`}
              />
            </Card>
          </Grid>

          <Grid container style={tstyles.itemRight} justify="flex-start" alignContent="center" alignItems="center">
            <Typography color="primary" variant="body1">{finalName}</Typography>
            {!!data.workout && (
              <Grid container style={{ borderTop: '1px solid', borderTopColor: theme.palette.primary.main }}>
                <Grid item container justify="center" xs={6} color="primary" component={Typography} onClick={data.workout ? handleOpenDialog : null}>Change</Grid>
                <Grid
                  item
                  container
                  style={{ color: '#98ee99' }}
                  justify="center"
                  xs={6}
                  component={Typography}
                  onClick={() => userKeepExercise({
                    name, id, icon_link, feedback, image_link, progression_model, reps, sets, video_link, listID,
                  })}
                > Keep
                </Grid>
              </Grid>
            )}
          </Grid>

        </Grid>
      </ListItem>
    );
  }
}

HOCListItem.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(HOCListItem);
