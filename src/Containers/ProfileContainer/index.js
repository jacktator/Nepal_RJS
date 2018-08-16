import React, {Component} from 'react';
import Profile from '../../Components/Profile'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeName, changeBirthDate, changeHeight, changeWeight, changeEmail, putPassword,changePassword,showPassError} from './actions';
import {Toast} from 'antd-mobile'

class ProfileContainer extends Component{
  constructor(props){
    super(props);
  }

  
  onSavePassword = () => {

    if(this.props.ProfileReducers.fields.currentPassword === "" || this.props.ProfileReducers.fields.newPassword === "" ||this.props.ProfileReducers.fields.confirmPassword === "" ) {
      this.props.showPassError("EMPTY_FIELD");
    } else {
      if(this.props.ProfileReducers.fields.password === this.props.ProfileReducers.fields.currentPassword){
        if(this.props.ProfileReducers.fields.newPassword !== this.props.ProfileReducers.fields.password ){
          if(this.props.ProfileReducers.fields.newPassword === this.props.ProfileReducers.fields.confirmPassword){
            if(this.props.ProfileReducers.fields.confirmPassword.length >= 5 ) {
              this.props.changePassword(this.props.ProfileReducers.fields.confirmPassword);
              Toast.info('Password Change Successful!');
            } else {
              this.props.showPassError("LENGTH");
            }
          } else {
            this.props.showPassError("NOT_MATCH");
          }
        } else {
          this.props.showPassError("SAME_PASS");
        }
      } else {
        this.props.showPassError("INCORRECT_PASS");
      }
    }

    setTimeout(function(){this.props.showPassError("NO_ERROR");}.bind(this),1500);
  }

  render () {

    const heightArray = ArrtoObj(70, 270, "length");
    const weightArray = ArrtoObj(20, 300, "weight");
    const {nick_name,fields} = this.props.ProfileReducers;

    return (
      <div>
        <Profile
          fields={fields}
          //mydetails
          name={nick_name}
          heightArray={heightArray}
          weightArray={weightArray}
          nameHandler={this.props.changeName}
          selectHeight={this.props.changeHeight}
          selectWeight={this.props.changeWeight}
          selectBirthDate = {this.props.changeBirthDate}

          //accountdetails
          selectEmail = {this.props.changeEmail}
          onSavePassword = {this.onSavePassword}
          putPassword = {this.props.putPassword}
          checkField = {this.checkField}
          />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ProfileReducers: state.ProfileReducers,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    changeWeight,changeHeight,changeName,changeBirthDate,changeEmail,
    putPassword,showPassError,changePassword
  }, dispatch
);
}


// initialise array, decide on the unit.
function ArrtoObj(RangeFrom: int, RangeTo: int, unit: string) {
  var returnArray = [];
  if (unit === "length") {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " cm"})
    };
  } else if (unit === "weight") {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " kg"})
    };
  } else {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i})
    };
  }
  return returnArray;
}

export default connect (mapStateToProps, matchDispatchToProps)(ProfileContainer);
