import React, { Component } from 'react';
import { WhiteSpace, Button, WingBlank, Flex } from 'antd-mobile';
import LogoLocation from '../LogoLocation/';
import {Link} from 'react-router-dom';
import './Login.css';
import {connect} from 'react-redux';

var pastyle={
  color: '#bbb',
  textAlign: 'center',
}
var normalstyle={
  backgroundColor: 'white',
  height: '200px',
}

class Login extends Component {
  state = {

  }
  render(){
    return(
          <div className="screen-login-style">
            <div className="logo-login-position">
              <LogoLocation/>
              <WingBlank>
                <Flex align="baseline">
                  <Flex.Item></Flex.Item>
                </Flex>
              </WingBlank>
            </div>
            <div class>
              <WingBlank>
                <Link to='signup' ><Button>Register</Button></Link><WhiteSpace /><WhiteSpace />
                <Link to='/login/logindetails'><Button type="primary">Login</Button></Link><WhiteSpace /><WhiteSpace /><WhiteSpace />
                <p style={pastyle}>Copyright @ 2018 Nepal</p>
              </WingBlank>
            </div>
          </div>
    );
  }
}
function mapStateToProps(state){
  console.log("mapStateToProps", state);
  const loginDetail = state.loginDetail.loginDetail ? state.loginDetail.loginDetail: null;

  return loginDetail;
}
export default connect(mapStateToProps)(Login);
