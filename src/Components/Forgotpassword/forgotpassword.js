import React, { Component } from 'react';

import { Button } from 'antd-mobile';

import { NavBar, Icon } from 'antd-mobile';

import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

import { WhiteSpace, WingBlank } from 'antd-mobile';

import {Link} from 'react-router-dom';



export default class Forgotpassword extends Component {
  render() {
    return (
      <div className="forgotpassword">

        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >Forgot Password</NavBar>


        <List renderHeader={() => 'Email'}>
          <TextareaItem
            title=""
            placeholder="Enter your email here here"
            data-seed="logId"
            ref={el => this.autoFocusInst = el}
            autoHeight
          />

          <TextareaItem
            title=""
            placeholder="Conform your email"
            data-seed="logId"
            autoHeight
            ref={el => this.customFocusInst = el}
          />
        </List>


        <List>
          <TextareaItem></TextareaItem>
        </List>

        <Button type="primary">Submit</Button><WhiteSpace />

      </div>
    );
  }
}
