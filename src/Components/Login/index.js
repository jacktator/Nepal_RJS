import React, { Component } from 'react';
import { List, TextareaItem, WhiteSpace, Button, NavBar, Icon, } from 'antd-mobile';
import { createForm } from 'rc-form';

import {Link} from 'react-router-dom';

export default class Login extends Component {


  componentDidMount() {
    this.autoFocusInst.focus();
  }
  transferAccountAndPassword(e){
    e.preventDefault();
    const accountValue = this.autoFocusInst.value;
    const passwordValue = this.customFocusInst.value;
    console.log(accountValue,passwordValue);
  }



  render(){
    return(
          <div>

            <Link to='signup'>
            <NavBar
              mode="light"
              leftContent="Register"
              onLeftClick={() => console.log('onLeftClick')}
            >Login
            </NavBar>
            </Link>

            <List renderHeader={() => 'Personal Information'}>
            <form onSubmit={(e)=>this.transferAccountAndPassword(e)}>
              <TextareaItem
                title="Account"
                data-seed="logId"
                ref={el => this.autoFocusInst = el}
                autoHeight
              />
              <TextareaItem
                title="Password"
                data-seed="logId"
                autoHeight
                ref={el => this.customFocusInst = el}
              />
            </form>
              <Button type="primary" onClick={(e)=>this.transferAccountAndPassword(e)}>Login</Button><WhiteSpace />



              <List.Item>
                <div
                  style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                  onClick={() => this.customFocusInst.focus(console.log('click password'))}
                >


                  <Link to='forgotpassword'>
                  <Button type="primary">Forgot password</Button><WhiteSpace />
                </Link>
                </div>
              </List.Item>

            </List>

          </div>

    );
  }

}
