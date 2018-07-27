import React, { Component } from 'react';
import {Button, WingBlank, WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import {connect} from 'react-redux';
import './Login.css';
import Logo from '../../Assets/LogoLighter.png';

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
            {/*Logo block*/}
            <div className="login-logo-position">
              <img src={Logo} className="logo" alt="logo"/>
            </div>
            <div className="login-register-button">
              <WingBlank>
                <Link to='signup' ><Button>Register</Button></Link>
              </WingBlank>
              <WhiteSpace size='xl'/>
              <WingBlank>
                <Link to='/login/logindetails'><Button type="primary">Login</Button></Link>
              </WingBlank>
              <WhiteSpace size='xl'/>
              <div className="login-copyright">
                <p>Copyright @ 2018 Nepal</p>
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
