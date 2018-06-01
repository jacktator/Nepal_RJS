import React, { Component } from 'react';
import { Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
//import LogoLocation from '../LogoLocation/';
import Logo from '../../assets/Logo.png';
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

var logoStyle = {
  height: 170,
  width: 160,
  justifyContent: 'center',
  alignItems: 'center',
};

var flexContainer = {
  height: 140,
  width: 150,
}

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps} style={{alignItems: 'center'}}></div>
);


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
        <div className="flex-container" >
          <WingBlank>
            <Flex align="baseline">
              <Flex.Item style={flexContainer}><PlaceHolder/></Flex.Item>
              <img src={Logo}  style={logoStyle} alt="this is a logo"/>
              <Flex.Item style={flexContainer}><PlaceHolder/></Flex.Item>
            </Flex>
          </WingBlank>
        </div>
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
