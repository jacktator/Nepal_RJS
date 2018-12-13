import React from 'react';
import {
  Paper, Button, BottomNavigation, BottomNavigationAction,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ClanderIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContentIcon from '@material-ui/icons/AssessmentOutlined';
import TrainingIcon from '@material-ui/icons/FitnessCenterOutlined';
import PlanIcon from '@material-ui/icons/EventAvailableOutlined';
import WorkoutIcon from '@material-ui/icons/DirectionsRunOutlined';
import HistoryIcon from '@material-ui/icons/History';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';

const FooterContent = (type) => {
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
    const { classes } = this.props;
    return (
      <Paper className={classes.footerPaper}>
        {this.props.showBottomButton && <Button variant="contained" fullWidth color="secondary" disableRipple onClick={() => this.props.FooterButtonClick()}>Start Rehab </Button>}
        <BottomNavigation
          className={classes.footerNav}
          value={this.props.currentPage || 0}
          showLabels
        >
          {!!this.props.FooterContent && FooterContent(this.props.FooterContent).map(v => (
            <BottomNavigationAction classes={{ root: classes.bottomNavigator, selected: classes.selected }} disableRipple key={v.label} label={v.label} style={{ padding: '0' }} component={Link} to={v.to} icon={v.Icon} />
          ))}
        </BottomNavigation>
      </Paper>
    );
  }
}


export default withStyles(styles)(FooterComponent);
