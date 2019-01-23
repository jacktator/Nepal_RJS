/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { styles } from '../../styles';
import { IMAGE_URL } from '../../../config';


const HOCListItem = (props) => {
  const {
    classes, exeData, funcs, keepExercise, pre, itemID, prefix, postureName, injuryName,

  } = props;
  return (
    <ListItem>
      <Paper className={classes.listItemPaper} component={exeData.selected ? Link : 'div'} to={`/rehab/training/${itemID}`}>
        <Grid container className={classes.root} style={{ height: '100%' }}>


          <Grid container className={classes.itemleft} justify="space-around" alignContent="space-around" alignItems="center">
            <Card className={classes.picturePlaceholder}>
              <CardMedia style={{ height: '100%', width: '100%', backgroundSize: 'contain' }} image={`${IMAGE_URL}${prefix}-${postureName || injuryName}-${`${exeData.name}`.replace(/ /g, '-')}.gif`} />
            </Card>
          </Grid>

          <Grid container className={classes.itemRight} justify="space-around" alignContent="center" alignItems="center">
            <Typography color="secondary" variant="body1">{exeData.name}</Typography>
            {
              pre
                ? (
                  <Typography style={{ color: '#ffcccb' }}>
              Expired
                  </Typography>
                ) : (
                  !exeData.selected && (
                  <Grid container>
                    <Grid item container justify="center" xs={6} color="secondary" component={Typography} onClick={funcs}>Change</Grid>
                    <Grid item container style={{ color: '#98ee99' }} justify="center" xs={6} component={Typography} onClick={keepExercise}>Keep</Grid>
                  </Grid>
                  )
                )

          }
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
};


HOCListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HOCListItem);
