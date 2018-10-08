import React , {Component} from 'react';
import { Accordion, List, InputItem, Toast, Button, ImagePicker, Modal } from 'antd-mobile';
import axios from 'axios';
const Item = List.Item;
const prompt = Modal.prompt;

//const AccountDetails = (props) => {
class AccountDetails extends Component{
  // state for (!) if they are true or not
  state ={
    CurrentError: true,
    currentErrorText:'Empty',
    NewError: true,
    newErrorText:'Empty',
    ConfirmError: true,
    confirmErrorText:'Empty',
    emailError: false,
    password:'',
    rePassword: '',
    newPassword: '',
  }

  checkPassword = (v, check) => {
    axios({
      url: 'https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/',
      method: 'post',
      data: {
        username: sessionStorage.getItem('user_email'),
        password: v,
      }
    })
      .then(res => {
        console.log('check finish');
        window.sessionStorage.setItem('token', res.data.token);
        window.sessionStorage.setItem('user_id', res.data.user_id);
        window.sessionStorage.setItem('user_email', res.data.user_email);
        check && this.updatePassword();
        !check && this.props.updateFinish();
        !check && window.location.reload();
      })
      .catch(err => { alert("Current Password is Wrong") })
  }

  updatePassword = () => {
    const token = window.sessionStorage.getItem('token');
    const url = 'https://nepal.sk8tech.io/wp-json/wp/v2/users/' + sessionStorage.getItem('user_id');
    axios({
      url: url,
      method: 'put',
      data: {
        password: this.state.newPassword,
      },
      headers:{'Authorization': "Bearer" + token}
    })
      .then(res => {
        console.log('changepass');
        this.checkPassword(this.state.newPassword, false);
      })
  }

  onPasswordChange = (v) => {
    v === "" ? this.setState({ CurrentError: true, currentErrorText: 'Empty' }) : v === this.state.rePassword ? this.setState({NewError: true, newErrorText: 'New password is same as old password'}) : this.setState({NewError:false, CurrentError:false});
    this.setState({password : v})
  }

  onRePasswordChange = v => {
    v === "" ? this.setState({ ConfirmError: true, confirmErrorText: 'Empty' }) : v !== this.state.newPassword ? this.setState({ConfirmError: true, confirmErrorText: 'Should be same as new password'}) : this.setState({ConfirmError:false});
    this.setState({ rePassword: v })
  }

  onNewPasswordChange = v => {
    v === "" ? this.setState({ NewError: true, newErrorText: 'Empty' }) : v === this.state.password ? this.setState({NewError: true, newErrorText: 'New password is same as old password'}) : this.setState({NewError:false});
    this.setState({ newPassword: v })
  }

  // shows message when (!) is clicked
  onEmailErrorClick = () => {
    if (this.state.emailError) {
      Toast.info('Please enter valid email format.');
    }
  }

  render() {
    const email = this.props.fields.email;
    return (
      <div>
        <Accordion className="my-accordion" onChange={this.onChange}>

          <Accordion.Panel header={<Item className="no-select" thumb={require("../../Assets/Profile/lock.svg")}> Change Password</Item>}>

            <List className="my-list">
              <InputItem
                placeholder="Current Password"
                type="password"
                clear
                onErrorClick={() => Toast.info(this.state.currentErrorText)}
                error={this.state.CurrentError}
                value={this.state.password}
                onChange={(v)=>this.onPasswordChange(v)}
                style={{color: 'grey'}}
                maxLength={75}
              />
              <InputItem
                placeholder="New Password"
                clear
                type="password"
                onErrorClick={()=>Toast.info(this.state.confirmErrorText)}
                error={this.state.newPassword === '' ? true : this.state.NewError}
                value={this.state.newPassword}
                onChange={(v)=>this.onNewPasswordChange(v)}
                style={{color: 'grey'}}
                maxLength={75}
              />
              <InputItem
                placeholder="Confirm New Password"
                clear
                type="password"
                onErrorClick={()=>Toast.info(this.state.confirmErrorText)}
                value={this.state.rePassword}
                error={this.state.ConfirmError === "" ? true : this.state.ConfirmError}
                onChange={(v)=>this.onRePasswordChange(v)}
                style={{color: 'grey'}}
                maxLength={75}
              />
              <Item className="center-save-button">
                <Button type="primary" size="small" inline onClick={() => { this.props.updataBegin(); this.checkPassword(this.state.password, true);}} disabled={!(!this.state.ConfirmError && !this.state.NewError && !this.state.CurrentError)}>
                  Save
                </Button>
              </Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header={<Item className="no-select" thumb={require("../../Assets/Profile/email.svg")}> Change Email</Item>}>
            <List className="my-list">
              <InputItem
              error={this.state.emailError}
              onErrorClick={this.onEmailErrorClick}
              onChange={v =>{this.props.selectEmail(v);this.checkEmailError()}}
              value={email}
              style={{color: 'grey'}}
              maxLength={75}
              ></InputItem>
            </List>
          </Accordion.Panel>
        </Accordion>

      </div>
     );
  }
}

export default AccountDetails;
