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
import { styles } from './style';

const FooterContentSet = (type) => {
  switch (type) {
    case 1:
      return [
        { label: 'Home', to: '/mainmenu', Icon: <HomeIcon /> },
        { label: 'History', to: '/workout/history', Icon: <HistoryIcon /> },
        { label: 'Plan', to: '/workout/plan', Icon: <PlanIcon /> },
        { label: 'Workout', to: '/workout/exercise', Icon: <WorkoutIcon /> },
      ];
    default:
      return [
        { label: 'Home', to: '/mainmenu', Icon: <HomeIcon /> },
        { label: 'Information', to: '/mainmenu', Icon: <ClanderIcon /> },
        { label: 'Content', to: '/mainmenu', Icon: <ContentIcon /> },
        { label: 'Training', to: '/rehab', Icon: <TrainingIcon /> },
      ];
  }
};

class FooterComponent extends React.PureComponent {
  render() {
    const {
      classes, showBottomButton, currentPage, FooterContent, FooterButtonClick,
    } = this.props;
    return (
      <Paper className={classes.footerPaper}>

        {showBottomButton
          && (
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            disableRipple
            onClick={() => FooterButtonClick()}
          >
            Start Rehab
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
  FooterButtonClick: PropTypes.func,
};

export default withStyles(styles)(FooterComponent);
