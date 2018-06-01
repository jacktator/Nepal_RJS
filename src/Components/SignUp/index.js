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
var emailiconstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/new-post.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}
var pastyle={
  color: '#bbb',
  textAlign: 'center',
}

var flexContainer = {
  height: 100,
  width: 150,
}

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class SignUp extends React.Component {
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
            placeholder="Full Name"
          >
            <div style={humeniconstyle} />
          </InputItem>
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="E-mail"
          >
            <div style={emailiconstyle} />
          </InputItem>
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="Password"
          >
            <div style={lockerstyle} />
          </InputItem>
        </List>
        <div style={{height: '50px'}}>
        </div>
        <WingBlank>
          <Link to='/questionnaire' >
            <Button type="primary">Create Account</Button>
          </Link>
        </WingBlank>
        <List.Item style={{height: '300px'}}>
          <div
              style={{ width: '100%', color: 'grey', textAlign: 'center' }}
          >

          </div>
        </List.Item>
      </div>
    );
  }
}
  const SignUpWrapper = createForm()(SignUp);

  export default SignUpWrapper;
