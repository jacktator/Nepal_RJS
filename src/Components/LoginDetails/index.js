import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.customFocusInst.focus();
  }
  state = {
    type: 'money',
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
        <WhiteSpace /><WhiteSpace /><WhiteSpace />
        <WingBlank>
          <Link to='' >
            <Button type="primary">Log in</Button>
          </Link>
        </WingBlank>

          <List.Item>
            <WhiteSpace />
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => this.customFocusInst.focus()}
            >
              Forget Password?
            </div>
            <div style={{height: '100px', backgroundColor: '#fff' }}>
            </div>
            <div style={pastyle} >
              Do not have account?
            </div>
            <div>
            <WingBlank>
              <Link to='/login/logindetails/signup' >
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
  const LoginInputWrapper = createForm()(LoginInput);

  export default LoginInputWrapper;
