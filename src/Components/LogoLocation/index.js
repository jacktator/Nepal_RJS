import React, { Component } from 'react';
import {Flex, WhiteSpace, WingBlank} from 'antd-mobile';
import LogoLighter from '../../assets/LogoLighter.png';

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

export default class LogoLocation extends Component{

  render() {

    return (
      <div className="flex-container" >
        <WingBlank>
          <Flex align="baseline">
            <Flex.Item style={flexContainer}><PlaceHolder/></Flex.Item>
            <img src={LogoLighter}  style={logoStyle} alt="this is a logo"/>
            <Flex.Item style={flexContainer}><PlaceHolder/></Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );
  }
}
