import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TickIcon from '@material-ui/icons/CheckCircle';

const styles = ({
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

const MediaControlCard = (props) => {
  const { classes, to, title, onChange, finish } = props;
  return (
    <Card className={classes.card}>

      <div className={classes.details}>
        <CardContent className={classes.content} component={Link} to={to}>
          <Typography style={{ fontSize: '16px', fontWeight: '600' }} component="span">
            {title}
          </Typography>
        </CardContent>

        <Divider />

        <div className={classes.controls} onClick={() => onChange()}>
          <IconButton aria-label="Play/pause" disableRipple>
            <span style={{ fontSize: '14px' }}>Change</span>
          </IconButton>
          {finish && <TickIcon style={{ color: 'green', marginRight: '12px' }} />}
        </div>

      </div>

      <CardMedia
        className={classes.cover}
        component={Link}
        to={to}
        image="https://nepal.sk8tech.io/wp-content/uploads/2018/10/Icon-9.jpg"
        title={title}
      />

    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
  finish: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
