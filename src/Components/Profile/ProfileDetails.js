import React , {Component} from 'react';
import initialPic from '../../Assets/Profile/anon.png';
import {Accordion,List,TextareaItem,InputItem,Toast,Button,DatePicker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const Item = List.Item;
const Brief = Item.Brief;

class ProfileDetails extends React.Component {

  onChange = (key) => {
   console.log(key);
 }

 state = {
   hasError: false,
   name:'Laxman Gautam',
   gender:'Male',
   weight:'70kg',
   email: 'laxman@gmail.com',
   password:'',
   confirmPass:''
 }


// Checks if confirm password matches with new password
 // onPasswordErrorClick = ()=>{
 //   if (this.state.hasError) {
 //     Toast.info('New Password does not match with Confirmation Password');
 //   }
 // }
 // onPasswordChange = (confirmPass) => {
 //   if(this.password !== confirmPass){
 //     this.setState({
 //       hasError: true,
 //     });
 //   } else {
 //     this.setState({
 //       hasError: false,
 //     });
 //   }
 //   this.setState({
 //     confirmPass,
 //   });
 // }


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

 //Change Name
onNameChange =(name)=>{
  this.setState({
    name,
  })
}

//Change Gender
onGenderChange =(gender)=>{
 this.setState({
   gender,
 })
}

//Change Weight
onWeightChange =(weight)=>{
 this.setState({
   weight,
 })
}


  render() {
     return (

            <div style={{marginTop:"40px"}}>
               <InputItem placeholder="Name"
                value={this.state.name}
                onChange={this.onNameChange}>
               <div className="profile-name-icon"/>
               </InputItem>
               <InputItem placeholder="Birth Date"
                value={this.state.Height}
                onChange={this.onHeightChange}>
               <div className="profile-birthday-icon"/>
               </InputItem>
               <InputItem placeholder="Height"
                value={this.state.Height}
                onChange={this.onHeightChange}>
               <div className="profile-height-icon"/>
               </InputItem>
               <InputItem placeholder="Weight"
               value={this.state.weight}
               onChange={this.onWeightChange}>
               <div className="profile-weight-icon"/>
               </InputItem>
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
             <div style={{marginTop:"40px"}}/>
             <List><Item onClick={()=>{alert("BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH")}}>View Terms and Conditions</Item></List>
             <List><Item onClick={()=>{alert("BYE")}}>Logout</Item></List>

      </div>
     );
   }
}

export default ProfileDetails;
