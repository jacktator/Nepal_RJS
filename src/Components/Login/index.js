import React, { Component } from 'react';
import { WhiteSpace, Button, WingBlank, Flex } from 'antd-mobile';
import LogoLocation from '../LogoLocation/';
import {Link} from 'react-router-dom';

var pastyle={
  color: '#bbb',
  textAlign: 'center',
}
var normalstyle={
  backgroundColor: 'white',
  height: '200px',

}

var flexContainer = {
  height: 140,
  width: 150,
}


export default class Login extends Component {

  render(){
    return(
          <div style={{backgroundColor: 'white'}}>
            <WingBlank>
              <Flex align="baseline">
                <Flex.Item style={flexContainer}></Flex.Item>
              </Flex>
            </WingBlank>
            <LogoLocation/>
            <WingBlank>
              <Flex align="baseline">
                <Flex.Item style={flexContainer}></Flex.Item>
              </Flex>
            </WingBlank>
            <div style={{height: '100px'}}>
            </div>
            <WingBlank>
              <Link to='signup' ><Button>Register</Button></Link><WhiteSpace /><WhiteSpace />
              <Link to='/login/logindetails'><Button type="primary">Login</Button></Link><WhiteSpace /><WhiteSpace /><WhiteSpace />
              <p style={pastyle}>Copyright @ 2018 Nepal</p>
              <div style={{height: '80px', backgroundColor: '#fff' }}>
              </div>
            </WingBlank>
          </div>
    );
  }

}
