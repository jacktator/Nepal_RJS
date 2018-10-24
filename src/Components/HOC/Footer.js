import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


class FooterComponent extends React.Component {
    state = {
        value: 3,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div
                style={{ width: '100%', height: '100%' }}
            >
                {this.props.showBottomButton && <Button style={{height:'5vh'}} variant="contained" color="primary" fullWidth disableRipple onClick={() => this.props.FooterButtonClick()}>Start Rehab </Button>}
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    style={{height:'7vh'}}
                >
                    {!!this.props.FooterContent && this.props.FooterContent.map((v, k) => {
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