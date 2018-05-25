import React, { Component } from 'react';
import { WhiteSpace, Button, WingBlank } from 'antd-mobile';
import LogoLocation from '../LogoLocation/';
import {Link} from 'react-router-dom';

var pastyle={
  color: '#bbb',
  textAlign: 'center',
}



export default class Login extends Component {

  render(){

    return(
          <div>
            <LogoLocation/>
              <WingBlank>
                <Link to='signup' ><Button>Register</Button></Link><WhiteSpace /><WhiteSpace />
                <Link to='/login/logindetails'><Button type="primary">Login</Button></Link><WhiteSpace /><WhiteSpace /><WhiteSpace />
              </WingBlank>
              <p style={pastyle}>Copyright @ 2018 Nepal</p>
            </div>
    );
  }

}
