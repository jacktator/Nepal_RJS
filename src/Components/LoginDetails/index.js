import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginDetails } from '../../Actions';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
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
var pastyle={
  color: '#bbb',
  textAlign: 'center',
}

var flexContainer = {
  height: 140,
  width: 150,
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
      <div style={{backgroundColor: 'white'}}>
        <WingBlank>
          <Flex align="baseline">
            <Flex.Item style={flexContainer}></Flex.Item>
          </Flex>
        </WingBlank>
        <LogoLocation/>
        <WhiteSpace />
        <List renderHeader={() => ''}>
          <InputItem
            name="email"
            placeholder="E-mail"
            value={this.state.login.email}
            onChange={this.inputHandler.bind(null, 'email')}
            >
            <div style={humeniconstyle} />
          </InputItem>
          <InputItem
            placeholder="Password"
            type="Password"
            value={this.state.login.password}
            onChange={this.inputHandler.bind(null, 'password')}
            >
            <div style={lockerstyle} />
          </InputItem>
        </List>
        <WhiteSpace /><WhiteSpace /><WhiteSpace />
        <WingBlank>
        <Link to=''>
            <Button type="primary" onClick={this.loginClickHandler.bind()}>Log in</Button>
        </Link>
        </WingBlank>

          <List.Item>
            <WhiteSpace />
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
            >
            <Link to='/forgetpassword'>
              Forget Password?
            </Link>
            </div>
            <div style={{height: '100px', backgroundColor: '#fff' }}>
            </div>
            <div style={pastyle} >
              Do not have account?
            </div>
            <div>
            <WingBlank>
              <Link to='/signup' >
                <Button>Register</Button>
              </Link>
            </WingBlank>
            </div>
            <div style={{height: '90px', backgroundColor: '#fff' }}>
            </div>
          </List.Item>
        </div>
      );
    }
  }
  const LoginInputWrapper = createForm()(connect (null, { loginDetails } )(LoginInput));

  export default LoginInputWrapper;
