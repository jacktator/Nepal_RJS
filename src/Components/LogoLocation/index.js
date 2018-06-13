import React, { Component } from 'react';
import {Flex, WhiteSpace, WingBlank} from 'antd-mobile';
import LogoLighter from '../../Assets/LogoLighter.png';

var logoStyle = {
  height: 170,
  width: 160,
  justifyContent: 'center',
  alignItems: 'center',
};

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps} style={{alignItems: 'center'}}></div>
);

export default class LogoLocation extends Component{
  render() {
    return (
        <WingBlank>
          <Flex align="baseline">
            <Flex.Item ><PlaceHolder/></Flex.Item>
            <img src={LogoLighter}  style={logoStyle} alt="this is a logo"/>
            <Flex.Item ><PlaceHolder/></Flex.Item>
          </Flex>
        </WingBlank>
    );
  }
}
