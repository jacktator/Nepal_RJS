import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem, Paper, Typography, Grid,
} from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import { styles } from '../../styles';

const iconDisplay = (finish) => {
  switch (finish) {
    case true:
      return <FeedbackIcon />;
    default:
      return <RightIcon />;
  }
};

class HOCListItem extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <ListItem>
        <Paper className={classes.listItemPaper}>
          <Grid container className={classes.root} style={{ height: '100%' }}>
            <Grid container className={classes.itemleft} justify="space-around" alignContent="space-around" alignItems="center">
              <Paper className={classes.picturePlaceholder} />
            </Grid>
            <Grid container className={classes.itemRight} justify="space-around" alignContent="center" alignItems="center">
              <Typography color="secondary" variant="body1">This</Typography>
              <Grid container>
                <Grid item container justify="center" xs={6} color="secondary" component={Typography}>Change</Grid>
                <Grid item style={{ color: 'red' }} container justify="center" xs={6} component={Typography}>Keep</Grid>
              </Grid>
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
