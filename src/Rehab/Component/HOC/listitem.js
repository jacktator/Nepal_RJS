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
import theme from '../../../theme';


const HOCListItem = (props) => {
  const {
    classes, exeData, funcs, keepExercise, pre, itemID, prefix, postureName, injuryName,

  } = props;
  return (
    <ListItem divider>
      <Grid container className={classes.listItemPaper} component={exeData.selected ? Link : 'div'} to={`/rehab/training/${itemID}`}>
        <Grid container className={classes.itemleft} justify="flex-start" alignContent="space-around" alignItems="center">
          <Card className={classes.picturePlaceholder} style={{ position: 'relative', alignItems: 'center' }}>
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
                event.target.src = 'https://nepal.sk8tech.io/wp-content/uploads/placeholder.png';
                console.log(event.target);
              }}
              image={`${IMAGE_URL}${prefix}-${postureName || injuryName}-${`${exeData.name}`.replace(/ /g, '-')}.png`}
            />
            <CardMedia
              component="img"
              onError={(event) => {
                event.target.src = 'https://nepal.sk8tech.io/wp-content/uploads/placeholder.png';
                console.log(event.target);
              }}
              style={{
                height: '100%',
                width: 'auto',
                backgroundSize: 'cover',
                zIndex: '20',
              }}
              image={`${IMAGE_URL}${prefix}-${postureName || injuryName}-${`${exeData.name}`.replace(/ /g, '-')}.png`}
            />
          </Card>
        </Grid>

        <Grid container className={classes.itemRight} justify="flex-start" alignContent="center" alignItems="center">
          <Typography color="primary" variant="body1">{exeData.name}</Typography>
          {
              pre
                ? (
                  <Typography style={{ color: '#ffcccb' }}>
              Expired
                  </Typography>
                ) : (
                  !exeData.selected && (
                  <Grid container style={{ borderTop: '1px solid', borderTopColor: theme.palette.primary.main }}>
                    <Grid item container justify="center" xs={6} color="primary" component={Typography} onClick={funcs}>Change</Grid>
                    <Grid item container style={{ color: '#98ee99' }} justify="center" xs={6} component={Typography} onClick={keepExercise}>Keep</Grid>
                  </Grid>
                  )
                )

          }
        </Grid>
      </Grid>
    </ListItem>
  );
};


HOCListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HOCListItem);
