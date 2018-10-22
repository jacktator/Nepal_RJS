import React from 'react';
import {WingBlank, WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import {connect} from 'react-redux';
import './Login.css';
import Logo from '../../Assets/LogoLighter.png';

const Login = (props) => {
    return(
          <div className="login">
            {/*Logo block*/}
            <div className="login-logo-position">
              <img src={Logo} className="logo" alt="logo"/>
            </div>
            <div className="login-register-button">
              <WingBlank>
                <Link to='/signup' >
                  <button className="customizedButton-White">Register</button>
                </Link>
              </WingBlank>
              <WhiteSpace size='xl'/>
              <WingBlank>
                <Link to='/login/logindetails'>
                  <button className="customizedButton-Blue">Login</button>
                  {/* <Button type="primary">Login</Button> */}
                </Link>
              </WingBlank>
              <WhiteSpace size='xl'/>
              <div className="login-copyright">
                <p>Copyright @ 2018 Nepal</p>
              </div>
            </div>
          </div>
    );
}
export default Login;
