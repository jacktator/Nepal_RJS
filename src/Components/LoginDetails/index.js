//@flow
import React from 'react';
import {Link} from 'react-router-dom';
import {InputItem, WingBlank,Button, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginDetails.css';
import Logo from '../../Assets/LogoLighter.png';

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

const LoginDetails = (props) => {
    const {email, password} = props;
    return (
      <div className="logindetails">
        {/* logo block*/}
        <div className="logindetails-logo-position">
          <img src={Logo} className="logo" alt="logo"/>
        </div>
        {/* input details block*/}
        <div className="logindetails-input-list">
          <div>
            <div>
              <List>
                <InputItem
                  value={email}
                  type="text"
                  name="email"
                  onChange={(value)=>props.onChangeEmail(value)}
                  onExtraClick = {()=> console.log('onExtraClick')}
                  onErrorClick = {()=> console.log('onErrorClick')}
                  style={{color: 'grey'}}
                >
                <div style={humeniconstyle} />
                </InputItem>
                <InputItem
                  value={password}
                  type="password"
                  name="password"
                  onChange={(value)=>props.onChangePassword(value)}
                  style={{color: 'grey'}}
                >
                <div style={lockerstyle} />
                </InputItem>
              </List>
            </div>
            <div className="logindetails-login-button">
              <WingBlank>
                <Button
                  type="primary"
                  onClick={()=>props.loadingButtonHandler()}
                  loading={props.state.loading}
                  disabled={props.state.click}
                >
                  Login
                </Button>
              </WingBlank>
            </div>
        </div>
        <div className="logindetails-forgetpassword">
          <Link to='/forgetpassword' style={{color: 'grey'}}>
            Forgot Password?
          </Link>
        </div>
    {/* no account block*/}
        <div className="logindetails-doyouhaveaccount" >
          Do not have an account?
        </div>
    {/* register button block*/}
        <div className="logindetails-register">
          <WingBlank>
            <Link to='/signup' >
              <button className="customizedButton-White" >Register</button>
            </Link>
          </WingBlank>
        </div>
        </div>
    </div>
    );
}
const LoginDetailsWrapper = createForm()(LoginDetails);
export default LoginDetailsWrapper;
