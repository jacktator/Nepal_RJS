//@flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import './ForgetPassWord.css';
// import Locker from '../../assets/locker.png';
//import LogoLocation from '../LogoLocation';
import Locker from '../../Assets/Locker.png';

var logoStyle = {
  height: 170,
  width: 160,
  justifyContent: 'center',
  alignItems: 'center',
};

var humeniconstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/gender-neutral-user.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}

type Props={
  email: string,
  onChangeInput: Function,
  onClickButton: Function,
}


class ForgetPassWord extends Component<Props> {
  render() {
    const {email}=this.props
    return (
      <div className="screen-forgetpassword-style">
        <div className="logo-forgetpassword-position">
          <WingBlank>
            <Flex align="baseline">
              <Flex.Item ></Flex.Item>
              <img src={Locker}  style={logoStyle} alt="this is a logo"/>
              <Flex.Item ></Flex.Item>
            </Flex>
          </WingBlank>
        </div>
        <div style={{textAlign: 'center', color: '#61ABE1'}}>
          <p>Do not worry,</p>
          <p>We just need your register email</p>
          <p>address to send you password reset.</p>
        </div>
        <div>
          <List renderHeader={() => ''}>
            <InputItem
              value={email}
              onChange={(value)=>this.props.onChangeInput(value)}
            >
              <div style={humeniconstyle} />
            </InputItem>
          </List>
        </div>
        <WhiteSpace /><WhiteSpace /><WhiteSpace />
        <div className="forgetpassword-reset-password-style">
          <WingBlank>
            <Button type="primary" onClick={()=>this.props.onClickButton(email)}>Reset Password</Button>
          </WingBlank>
        </div>
        <div className="forgetpassword-doyouhaveaccount-style">
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
  const ForgetPassWordWrapper = createForm()(ForgetPassWord);

  export default ForgetPassWordWrapper;
