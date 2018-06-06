import React, { Component } from 'react';
import { Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Launch.css';
import Logo from '../../assets/Logo.png';
//import LogoLocation from '../LogoLocation/';
// import Background from '../../assets/launchscreen.png';
// backgroundImage: `url(${Background})`,


var logoStyle = {
  height: 170,
  width: 160,
  justifyContent: 'center',
  alignItems: 'center',
};

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps} style={{alignItems: 'center'}}></div>
);

export default class Launch extends Component {

  render() {
    return (
      <div className="screen-launch-style">
        <div className="logo-launch-position">
          <WingBlank>
            <Flex align="baseline">
              <Flex.Item ></Flex.Item>
              <img src={Logo}  style={logoStyle} alt="this is a logo"/>
              <Flex.Item ></Flex.Item>
            </Flex>
          </WingBlank>
        </div>
        <div>
          <WingBlank>
            <Link to='login' >
              <Button type="primary" style={{backgroundColor: '#4CA0CC'}}>Get Started</Button>
            </Link>
          </WingBlank>
        </div>
      </div>
    );
  }
}
