import React, { Component } from 'react';
import { WhiteSpace, Button, WingBlank, Flex } from 'antd-mobile';
import LogoLocation from '../LogoLocation/';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import './Login.css';

var pastyle={
  color: '#bbb',
  textAlign: 'center',
}
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
          <div className="screen-login-style">
            <div className="logo-login-position">
              <LogoLocation/>
            </div>
            <div>
              <WingBlank>
                <Link to='signup' ><Button>Register</Button></Link><WhiteSpace /><WhiteSpace />
                <Link to='/login/logindetails'><Button type="primary">Login</Button></Link><WhiteSpace /><WhiteSpace /><WhiteSpace />
                <p style={pastyle}>Copyright @ 2018 Nepal</p>
              </WingBlank>
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
