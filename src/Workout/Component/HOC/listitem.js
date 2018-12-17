import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../styles';

class HOCListItem extends React.PureComponent {
  render() {
    const { classes, data, handleOpenDialog } = this.props;
    return (
      <ListItem>
        <Paper className={classes.listItemPaper} component={!data.workout ? Link : 'div'} to="/workout/exercise">
          <Grid container className={classes.root} style={{ height: '100%' }}>

            <Grid container className={classes.itemleft} justify="space-around" alignContent="space-around" alignItems="center">
              <Card className={classes.picturePlaceholder}>
                <CardMedia style={{ height: '100%', width: '100%' }} image="/image/workoutExercise.jpg" />
              </Card>
            </Grid>

            <Grid container className={classes.itemRight} justify="space-around" alignContent="center" alignItems="center">
              <Typography color="secondary" variant="body1">{data.name}</Typography>
              {!!data.workout && (
              <Grid container>
                <Grid item container justify="center" xs={6} color="secondary" component={Typography} onClick={data.workout ? handleOpenDialog : null}>Change</Grid>
                <Grid item container style={{ color: '#98ee99' }} justify="center" xs={6} component={Typography}>Keep</Grid>
              </Grid>
              )}
            </Grid>

          </Grid>
        </Paper>
      </ListItem>
    );
  }
}

HOCListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HOCListItem);
