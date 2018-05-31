import React, { Component } from 'react';
import { Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
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

var flexContainer = {
  height: 140,
  width: 150,
}


export default class Launch extends Component {

  render() {
    return (
      <div style={screenStyle}>
        <div>
        <WingBlank>
          <Flex align="baseline">
            <Flex.Item style={flexContainer}></Flex.Item>
          </Flex>
        </WingBlank>
        <LogoLocation/>
        <WingBlank>
          <Flex.Item style={flexContainer}></Flex.Item>
        </WingBlank>
        <WhiteSpace /><WhiteSpace />
        <div style={{height: '200px'}}>
        </div>
        <WingBlank>
          <Link to='login' >
            <Button type="primary" style={buttonStyle}>Get Started</Button>
          </Link>
        </WingBlank>
        <div style={{height: '98px'}}>
        </div>
        </div>

      </div>
    );
  }
}
