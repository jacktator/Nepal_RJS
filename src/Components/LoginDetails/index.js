import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginDetails } from '../../Actions';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginDetails.css';
// import Locker from '../../assets/locker.png';
import LogoLocation from '../LogoLocation';
var lockerstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/lock.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}

var humeniconstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/gender-neutral-user.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class LoginInput extends React.Component {
  state = {
    type: 'money',
    login: {
      email: "",
      password: ""
    }
  }

  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.customFocusInst.focus();
  }

  //Handle the input of the field to the state
  inputHandler = (key, val) => {
    let login = { ...this.state.login};
    login[key] = val;
    this.setState({login});
  }

  //Handle the click event for login button
  loginClickHandler = () => {
    this.props.loginDetails(this.state.login);
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="screen-logindetails-style">
        <div className="logo-logindetails-position">
          <LogoLocation/>
        </div>
        <div className="input-info-style">
          <List renderHeader={() => ''}>
            <InputItem
              {...getFieldProps('inputtitle2')}
              placeholder="E-mail"
            >
              <div style={humeniconstyle} />
            </InputItem>
            <InputItem
              {...getFieldProps('inputtitle2')}
              placeholder="Password"
            >
              <div style={lockerstyle} />
            </InputItem>
          </List>
        </div>
        <div className="login-button-style">
          <WingBlank>
            <Link to='' >
              <Button type="primary">Log in</Button>
            </Link>
          </WingBlank>
        </div>
        <div className="forgetpassword-style">
          <Link to='/forgetpassword' style={{color: '#bbb'}}>
            Forget Password?
          </Link>
        </div>
        <div className="doyouhaveaccount-style" >
          Do not have account?
        </div>
        <div>
          <WingBlank>
            <Link to='/signup' >
              <Button>Register</Button>
            </Link>
          </WingBlank>
        </div>
      </div>
    );
    }
  }
  const LoginInputWrapper = createForm()(connect (null, { loginDetails } )(LoginInput));

  export default LoginInputWrapper;
