import React , {Component} from 'react';
import {Accordion,List,InputItem,Toast,Button,ImagePicker, Modal} from 'antd-mobile';
const Item = List.Item;
const prompt = Modal.prompt;

//const AccountDetails = (props) => {
class AccountDetails extends Component{
  // state for (!) if they are true or not
  state ={
    CurrentError: false,
    NewError: false,
    ConfirmError: false,
    emailError: false,
  }
  // checks if reducer shows an error, sets error state to true (shows the ! icon)
  checkError = () => {
      setTimeout(
      function() {
      if(this.props.fields.passError === "INCORRECT_PASS"){
        this.setState({
          CurrentError: true,
        });
      } else if(this.props.fields.passError === "NOT_MATCH"){
        this.setState({
          ConfirmError: true,
        });
      } else if(this.props.fields.passError === "SAME_PASS"){
        this.setState({
          NewError: true,
        });
      } else if(this.props.fields.passError === "EMPTY_FIELD"){
        Toast.info('Please complete the password field before continuing');
      } else if(this.props.fields.passError === "LENGTH") {
        Toast.info('Your password must be at least 5 characters long');
      }}.bind(this),1000);
  }

  //(when clicked on (!) , shows the message)
  onErrorClick = () => {
    if (this.state.CurrentError) {
      Toast.info('Current password is incorrect');
    }
    if (this.state.NewError) {
      Toast.info('Current password is the same as New password');
    }
    if (this.state.ConfirmError) {
      Toast.info('Confirm password does not match with New password');
    }
  }

  //checks email and shows (!) error if not in correct format
  checkEmailError = () => {
    setTimeout(
    function() {
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})/i);
    if (!pattern.test(this.props.fields.email)) {
      this.setState({
        emailError: true,
      });
    } else{
      this.setState({
        emailError: false,
      });
    }
    }.bind(this),1000);
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
                    style={{color: 'grey'}}
                     onChange={(v)=>this.props.putPassword(v, "Current")}
                     error={this.state.CurrentError}
                     onErrorClick={this.onErrorClick}
                     maxLength={75}
                     />
                  <InputItem
                     placeholder="New Password"
                type="password"
                clear
                     style={{color: 'grey'}}
                     onChange={(v)=>this.props.putPassword(v,"New")}
                     error={this.state.NewError}
                     onErrorClick={this.onErrorClick}
                     maxLength={75}
                     />
                  <InputItem
                     placeholder="Confirm New Password"
                type="password"
                clear
                     style={{color: 'grey'}}
                     onChange={(v)=>this.props.putPassword(v,"Confirm")}
                     error={this.state.ConfirmError}
                     onErrorClick={this.onErrorClick}
                     maxLength={75}
                     />
                  <Item className="center-save-button">
                    <Button type="primary" size="small" inline onClick={()=>{
                      this.props.onSavePassword();
                      this.checkError();
                      this.setState({
                        CurrentError: false,
                        NewError: false,
                        ConfirmError: false,});
                    }}>Save</Button>
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
