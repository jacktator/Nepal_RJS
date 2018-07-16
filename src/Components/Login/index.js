import React, { Component } from 'react';
import {Button, WingBlank} from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import './Login.css';
import Logo from '../../Assets/LogoLighter.png';

var normalstyle={
  backgroundColor: 'white',
  height: '200px',
}

class Login extends Component {
  state = {
    Nepal: []
  }

  componentDidMount() {
    // console.log("componentDidMount");
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => {
    //     console.log("componentDidMount");
    //     console.log(response);
    //   })
  }

  render(){
    return(
          <div className="login">
          <div className="screen-login-style">
            {/*Logo block*/}
            <div className="logo-login-position">
              <img src={Logo} className="logo"/>
            </div>
            <div>
              <WingBlank>
                {/*button blocks*/}
                <div className="register-button"><Link to='signup' ><Button>Register</Button></Link></div>
                <div className="login-button"><Link to='/login/logindetails'><Button type="primary">Login</Button></Link></div>
                <p style={{color: '#bbb', textAlign: 'center'}}>Copyright @ 2018 Nepal</p>
              </WingBlank>
            </div>
          </div>
          </div>
    );
  }
}
// function mapStateToProps(state){
//   console.log("mapStateToProps", state);
//   const loginDetail = state.loginDetail.loginDetail ? state.loginDetail.loginDetail: null;
//
//   return loginDetail;
// }
// export default connect(mapStateToProps)(Login);
export default Login;
