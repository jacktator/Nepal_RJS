import React, { Component } from 'react';
import { Button, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';
import LogoLocation from '../LogoLocation/';
// import Background from '../../assets/launchscreen.png';
// backgroundImage: `url(${Background})`,

var buttonStyle={
  justifyContent: 'center',
  alignItems: 'end',
  backgroundColor: '#4CA0CC',
}

var screenStyle = {
  backgroundColor: '#2E344C',
};

export default class Launch extends Component {

  render() {
    return (
      <div style={screenStyle}>
        <div>
        <LogoLocation/>
        <div style={{height: '300px'}}>
        </div>
        <WingBlank>
        <div>
          <Link to='login' >
            <Button type="primary" style={buttonStyle}>Get Started</Button>
          </Link>
        </WingBlank>
        <div style={{height: '100px'}}>
        </div>

        </div>

      </div>
    );
  }
}
