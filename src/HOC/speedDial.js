import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClanderIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContentIcon from '@material-ui/icons/AssessmentOutlined';
import TrainingIcon from '@material-ui/icons/FitnessCenterOutlined';
import WorkoutIcon from '@material-ui/icons/DirectionsRunOutlined';
import ViewHandleIcon from '@material-ui/icons/ViewHeadline';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { deleteAuthToken } from '../UserConfig/action';

const styles = theme => ({
  root: {
    height: 'auto',
  },
  rootIcon: {
    color: theme.palette.primary.light,
    height: '24px',
    backgroundColor: 'unset',
  },
  speedDialRight: {
    position: 'absolute',
    top: 0,
    right: theme.spacing.unit * 2,
  },
  speedDialLeft: {
    position: 'absolute',
    top: theme.spacing.unit,
    left: theme.spacing.unit * 2,
  },
  buttonClass: {
    height: '10vw',
    width: '10vw',
  },
});

const actions = [
  { icon: <WorkoutIcon color="primary" />, name: 'Workout', to: '/workout' },
  { icon: <TrainingIcon color="primary" />, name: 'Rehab and Posture', to: '/rehab' },
  { icon: <PersonIcon color="primary" />, name: 'Profile', to: '/user/profile' },
  { icon: <ContentIcon color="primary" />, name: 'Content', to: '/' },
  { icon: <ClanderIcon color="primary" />, name: 'Ask a Question', to: '/' },
  { icon: <HelpIcon color="primary" />, name: 'FAQ', to: '/' },
  { icon: <LogoutIcon color="primary" />, name: 'Logout', to: '/logout' },
];

class SpeedDialTooltipOpen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hidden: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleVisibility() {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }));
  }

  handleClick() {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  handleActionClick(to) {
    if (to === '/logout') {
      deleteAuthToken();
      window.location.replace('/');
    }
    window.location.hash = to;
  }

  handleOpen() {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const {
      classes, right, secondary, shadow,
    } = this.props;
    const { open } = this.state;

    return (
      <SpeedDial
        ButtonProps={{ style: { backgroundColor: 'unset', transform: 'scale(0.8)', boxShadow: shadow ? '' : 'unset' }, disableRipple: true }}
        ariaLabel="SpeedDial tooltip example"
        className={right ? classes.speedDialRight : classes.speedDialLeft}
        icon={<SpeedDialIcon icon={<ViewHandleIcon color={secondary ? 'secondary' : 'primary'} />} className={classes.rootIcon} />}
        onBlur={this.handleClose}
        onClick={this.handleClick}
        onClose={this.handleClose}
        direction={right ? (window.orientation === (90 || 270) ? 'left' : 'down') : (window.orientation === (90 || 270) ? 'right' : 'down')}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            style={{ backgroundColor: 'snow' }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={window.orientation !== (90 || 270)}
            onClick={() => this.handleActionClick(action.to)}
          />
        ))}
      </SpeedDial>
    );
  }
}

SpeedDialTooltipOpen.propTypes = {
  classes: PropTypes.object.isRequired,
  right: PropTypes.bool,
  secondary: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default withStyles(styles)(SpeedDialTooltipOpen);
