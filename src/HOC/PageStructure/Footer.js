/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import ClanderIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContentIcon from '@material-ui/icons/AssessmentOutlined';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PlanIcon from '@material-ui/icons/EventAvailableOutlined';
import TrainingIcon from '@material-ui/icons/FitnessCenterOutlined';
import WorkoutIcon from '@material-ui/icons/DirectionsRunOutlined';
import Typography from '@material-ui/core/Typography';
import { styles } from './style';


const FooterContentSet = (type) => {
  switch (type) {
    case 1:
      return [
        { label: 'Home', to: '/mainmenu', Icon: <HomeIcon color="primary" /> },
        { label: 'History', to: '/workout/history', Icon: <HistoryIcon color="primary" /> },
        { label: 'Plan', to: '/workout/plan', Icon: <PlanIcon color="primary" /> },
        { label: 'Workout', to: `/workout/daily/${sessionStorage.progress}`, Icon: <WorkoutIcon color="primary" /> },
      ];
    default:
      return [
        { label: 'Home', to: '/mainmenu', Icon: <HomeIcon color="primary" /> },
        { label: 'Information', to: '/mainmenu', Icon: <ClanderIcon color="primary" /> },
        { label: 'Content', to: '/mainmenu', Icon: <ContentIcon color="primary" /> },
        { label: 'Training', to: '/rehab', Icon: <TrainingIcon color="primary" /> },
      ];
  }
};

class FooterComponent extends React.PureComponent {

  render() {

    const {
      classes,
      showBottomButton,
      currentPage,
      FooterContent,
      workout,
    } = this.props;

    return (
      <Paper className={classes.footerPaper} elevation={10}>

        {showBottomButton
          && (
          <Button
            variant="contained"
            fullWidth
            color="primary"
            disableRipple
            component={Link}
            to={workout ? '/workout/exercise/1' : '/rehab/training/0'}
          >
            <Typography color="secondary"> { workout ? 'Start Workout' : 'Start Rehab' } </Typography>

          </Button>
          )
        }

        <BottomNavigation
          className={classes.footerNav}
          value={currentPage || 0}
          showLabels
        >
          {!!FooterContent && FooterContentSet(FooterContent).map(v => (
            <BottomNavigationAction
              classes={{ root: classes.bottomNavigator, selected: classes.selected }}
              disableRipple
              key={v.label}
              label={v.label}
              style={{ padding: '0' }}
              component={Link}
              to={v.to}
              icon={v.Icon}
            />
          ))}
        </BottomNavigation>

      </Paper>
    );
  }
}

FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  showBottomButton: PropTypes.bool,
  currentPage: PropTypes.number,
  FooterContent: PropTypes.number,
};

export default withStyles(styles)(FooterComponent);
