//@flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import './ForgetPassWord.css';
// import Locker from '../../assets/locker.png';
//import LogoLocation from '../LogoLocation';
import Locker from '../../Assets/Locker.png';


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
      <div className="screen-forgetpassword-container">
        <div className="logo-forgetpassword-position">
              <img src={Locker} className="logo-lock-forgetpassword" alt="this is a logo"/>
        </div>
        <div className="text-forgetpassword-position">
          <p>{"Don't worry, please enter"}</p>
          <p>your email address and we will</p>
          <p>send you a link to reset it.</p>
        </div>
      <div className="email-block">
        <div>
          <List renderHeader={() => ''}>
            <InputItem
              placeholder={email}
              onChange={(value)=>this.props.onChangeInput(value)}
            >
              <div style={humeniconstyle} />
            </InputItem>
          </List>
        </div>
        <WhiteSpace size="xl"/>
        <div>
          <WingBlank>
            <Button type="primary" onClick={()=>this.props.onClickButton(email)}>Reset Password</Button>
          </WingBlank>
        </div>
        <WhiteSpace size="xl"/>
        <div className="forgetpassword-doyouhaveaccount-style">
          Do not have account?
        </div>
        <WhiteSpace size="xl"/>
        <div>
          <WingBlank>
            <Link to='/signup' >
              <Button>Register</Button>
            </Link>
          </WingBlank>
        </div>
        </div>
      </div>
    );
  }
}
  const ForgetPassWordWrapper = createForm()(ForgetPassWord);

  export default ForgetPassWordWrapper;
