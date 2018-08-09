import React , {Component} from 'react';
import {Accordion,List,InputItem,Toast,Button} from 'antd-mobile';

const Item = List.Item;

class ProfileDetails extends Component {

  onChange = (key) => {
   console.log(key);
 }

 state = {
   hasError: false,
   email: 'laxman@gmail.com',
   password:'',
   confirmPass:''
 }

// Checks if email matches format.
 onEmailErrorClick = () => {
   if (this.state.hasError) {
     Toast.info('Please enter valid email-ID');
   }
 }
 onEmailChange = (email) => {
   var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})/i);
   if (!pattern.test(email)) {
     this.setState({
       hasError: true,
     });
   } else {
     this.setState({
       hasError: false,
     });
   }
   this.setState({
     email,
   });
 }

  render() {
     return (

            <div style={{marginTop:"40px"}}>

              <div style={{marginTop:"40px"}}/>
              <Accordion className="my-accordion" onChange={this.onChange}>
               <Accordion.Panel header={<Item thumb={require("../../Assets/Profile/lock.svg")}> Change Password</Item>}>
                 <List className="my-list">
                   <InputItem
                     placeholder="Current Password"
                     type="password"
                     style={{color: 'grey'}}/>
                  <InputItem
                     placeholder="New Password"
                     type="password"
                     style={{color: 'grey'}}
                     />
                  <InputItem
                     placeholder="Confirm New Password"
                     type="password"
                     style={{color: 'grey'}}
                     /*error={this.state.hasError}
                     onErrorClick={this.onPasswordErrorClick}
                     onChange={this.onPasswordChange}
                     value={this.state.confirmPass}   *//>
                  <Item>
                    <Button type="primary" size="small" inline onClick={()=>{alert("CLICKED")}} >Save</Button>
                  </Item>
                 </List>
               </Accordion.Panel>
               <Accordion.Panel header={<Item thumb={require("../../Assets/Profile/email.svg")}> Change Email</Item>}>
                 <List className="my-list">
                 <InputItem
                    error={this.state.hasError}
                    onErrorClick={this.onEmailErrorClick}
                    onChange={this.onEmailChange}
                    value={this.state.email}
                  ></InputItem>
                 </List>
               </Accordion.Panel>
             </Accordion>

      </div>
     );
   }
}

export default ProfileDetails;
