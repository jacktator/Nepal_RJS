import React, { Component } from 'react';
import { WhiteSpace, Button, WingBlank } from 'antd-mobile';
import LogoLocation from '../LogoLocation/';

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
                
                <Button>Register</Button><WhiteSpace /><WhiteSpace />
                <Button type="primary">Login</Button><WhiteSpace /><WhiteSpace /><WhiteSpace />
              </WingBlank>
              <p style={pastyle}>Copyright @ 2018 Nepal</p>
            </div>

    );
  }

}
