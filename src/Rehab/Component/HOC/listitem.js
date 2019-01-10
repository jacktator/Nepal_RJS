import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../styles';

class HOCListItem extends React.PureComponent {
  render() {
    const { classes, exeData, funcs } = this.props;
    console.log(exeData);
    return (
      <ListItem>
        <Paper className={classes.listItemPaper}>
          <Grid container className={classes.root} style={{ height: '100%' }}>

            <Grid container className={classes.itemleft} justify="space-around" alignContent="space-around" alignItems="center">
              <Paper className={classes.picturePlaceholder} />
            </Grid>

            <Grid container className={classes.itemRight} justify="space-around" alignContent="center" alignItems="center">
              <Typography color="secondary" variant="body1">{exeData.name}</Typography>
              <Grid container>
                <Grid item container justify="center" xs={6} color="secondary" component={Typography} onClick={funcs}>Change</Grid>
                <Grid item container style={{ color: '#98ee99' }} justify="center" xs={6} component={Typography}>Keep</Grid>
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
