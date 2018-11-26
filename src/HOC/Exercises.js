import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TickIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '13vh',
    marginBottom: '1.6vh',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  content: {
    flex: '1 0 auto',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  cover: {
    width: 120,
    borderLeft: 'solid 1px gray',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '38px',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent component={Link} to={props.to} className={classes.content}>
          <Typography component="span" style={{ fontSize: '16px', fontWeight: '600' }}>
            {props.title}
          </Typography>
        </CardContent>
        <Divider />
        <div className={classes.controls} onClick={() => props.onChange()}>
          <IconButton aria-label="Play/pause" disableRipple>
            <span style={{ fontSize: '14px' }}>Change</span>
          </IconButton>
          {props.finish && <TickIcon style={{ color: 'green', marginRight: '12px' }} />}
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        component={Link}
        to={props.to}
        image="https://nepal.sk8tech.io/wp-content/uploads/2018/10/Icon-9.jpg"
        title={props.title}
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
