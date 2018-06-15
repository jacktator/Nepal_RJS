//@flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, InputItem, WingBlank, Button,} from 'antd-mobile';
import { createForm } from 'rc-form';
import './SignUp.css';
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
type Props={
  username: string,
  email:string,
  password: number,
  onChangeEmail: Function,
  onChangePassword: Function,
  onChangeUsername: Function,
  onClickButton: Function,

}
class SignUp extends Component<Props> {

  render() {
    const {username, email, password}= this.props;
    return (
      <div className="screen-signup-style">
        <div className="logo-signup-position">
          <LogoLocation/>
        </div>
        <div className="signup-info-style">
          <List renderHeader={() => ''}>
            <InputItem
              value={username}
              type="text"
              name="username"
              onChange={(value)=>this.props.onChangeUsername(value)}
            >
              <div style={humeniconstyle} />
            </InputItem>
            <InputItem
              value={email}
              type="text"
              name="email"
              onChange={(value)=>this.props.onChangeEmail(value)}
            >
              <div style={emailiconstyle} />
            </InputItem>
            <InputItem
              value={password}
              type="password"
              name="password"
              onChange={(value)=>this.props.onChangePassword(value)}
            >
              <div style={lockerstyle} />
            </InputItem>
          </List>
        </div>
        <div>
          <WingBlank>
            <Button type="primary" onClick={()=>this.props.onClickButton(username, email, password)}>Create Account</Button>
          </WingBlank>
        </div>
      </div>
    );
  }
}
  const SignUpWrapper = createForm()(SignUp);

  export default SignUpWrapper;
