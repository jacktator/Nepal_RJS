import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
// import Locker from '../../assets/locker.png';
//import LogoLocation from '../LogoLocation';
import Locker from '../../assets/Locker.png';

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

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps} style={{alignItems: 'center'}}></div>
);

let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ForgetPassWord extends React.Component {
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

        <WingBlank>
          <Flex align="baseline">
            <Flex.Item style={flexContainer}><PlaceHolder/></Flex.Item>
            <img src={Locker}  style={logoStyle} alt="this is a logo"/>
            <Flex.Item style={flexContainer}><PlaceHolder/></Flex.Item>
          </Flex>
        </WingBlank>

        <WhiteSpace />
        <div style={{textAlign: 'center', color: '#61ABE1'}}>
          <p>Do not worry,</p>
          <p>We just need your register email</p>
          <p>address to send you password reset.</p>
        </div>
        <List renderHeader={() => ''}>
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="E-mail"
          >
            <div style={humeniconstyle} />
          </InputItem>
        </List>
        <WhiteSpace /><WhiteSpace /><WhiteSpace />
        <WingBlank>
          <Link to='' >
            <Button type="primary">Reset Password</Button>
          </Link>
        </WingBlank>

          <List.Item>
            <WhiteSpace />
            <div style={{height: '50px', backgroundColor: '#fff' }}>
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
              <div style={{height: '100px', backgroundColor: '#fff' }}>
            </div>

          </List.Item>
        </div>
      );
    }
  }
  const ForgetPassWordWrapper = createForm()(ForgetPassWord);

  export default ForgetPassWordWrapper;
