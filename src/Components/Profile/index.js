import React , {Component} from 'react';
import './Profile.css';
import ImagePicker from './ImagePicker';
import ProfileDetails from './ProfileDetails';

class Profile extends Component {

  render() {

    return (
      <div className="profile-container">
      <div className= "profile-image-containers">
        <img className="profile-image-sources" src={require('../../Assets/Workout/sampleImage.jpeg')} alt="mainmenu"/>
        <div className="profile-image-change">
          <ImagePicker/>
        </div>
        <div className="profile-name"> Laxman Gautam</div>
      </div>

      <div className="profile-list-view-container">
          <ProfileDetails/>
      </div>
      </div>
    )
  }
}

export default Profile;
