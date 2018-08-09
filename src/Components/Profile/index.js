import React , {Component} from 'react';
import Header from './Header';
import MyDetails from './MyDetails';
import AccountDetails from './AccountDetails';
import Footer from './Footer';

import './Profile.css';

// The first level of the profile page, separates into 4 sections:
// Header: background image, and ImagePicker
// MyDetails: name, birthday, height,weight
// AccountDetails: change password, change Email
// Footer: View terms, logout

class Profile extends Component{

  render(){
    return (
      <div className="profile-container">
      <div className= "profile-image-containers">
        <Header/>
      </div>
      <div className="profile-list-view-container">

      <MyDetails
        name = {this.props.name}
        birthDate = {this.props.birthDate}
        heightArray={this.props.heightArray}
        weightArray={this.props.weightArray}
        selectWeight= {this.props.selectWeight}
        fields={this.props.fields}
        />
        <AccountDetails/>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default Profile;
