import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ClanderIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContentIcon from '@material-ui/icons/AssessmentOutlined';
import TrainingIcon from '@material-ui/icons/FitnessCenterOutlined';
import PlanIcon from '@material-ui/icons/EventAvailableOutlined';
import WorkoutIcon from '@material-ui/icons/DirectionsRunOutlined';
import HistoryIcon from '@material-ui/icons/History'
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const FooterContent = type =>{
    switch (type){
        case 1 :
        return[
            { label: 'Home', to: '/mainmenu', Icon: <HomeIcon /> },
            { label: 'History', to: '/history', Icon: <HistoryIcon /> },
            { label: 'Plan', to: '/plan', Icon: <PlanIcon /> },
            { label: 'Workout', to: '/workout', Icon: <WorkoutIcon /> },
        ];
        case 2 :
        return[
            { label: 'Home', to: '/mainmenu', Icon: <HomeIcon /> },
            { label: 'Information', to: '/mainmenu', Icon: <ClanderIcon /> },
            { label: 'Content', to: '/mainmenu', Icon: <ContentIcon /> },
            { label: 'Training', to: '/rehab', Icon: <TrainingIcon /> },
        ];
    }
}

class FooterComponent extends React.Component {
    render() {

        return (
            <div
                style={{ width: '100%', height: '100%' }}
            >
                {this.props.showBottomButton && <Button style={{height:'5vh'}} variant="contained" color="primary" fullWidth disableRipple onClick={() => this.props.FooterButtonClick()}>Start Rehab </Button>}
                <BottomNavigation
                    value={this.props.currentPage || 0}
                    showLabels
                    style={{height:'7vh'}}
                >
                    {!!this.props.FooterContent && FooterContent(this.props.FooterContent).map((v, k) => {
                        return (
                            <BottomNavigationAction disableRipple key={k} label={v.label} style={{ padding: '0' }} component={Link} to={v.to} icon={v.Icon} />
                        );
                    })}
                </BottomNavigation>
            </div>
        );
    }
}


export default FooterComponent;