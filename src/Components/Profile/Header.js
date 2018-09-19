import React , {Component} from 'react';
import initialPic from '../../Assets/Profile/anon.png';
import { ImagePicker } from 'antd-mobile';
// the Header component of Profile, contains the background image, profile picture and name title

class Header extends Component {
    constructor(props) {
      super(props)
      this.state={
        files: []
      }
      this.handleChange = this.handleChange.bind(this)
    }
    onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
        files,
      });
    };
    // change photo
    handleChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
      console.log(event);
    }

    render() {
      const { files } = this.state;
      return (
        <div>
          <img className="profile-image-sources" src={require('../../Assets/Workout/sampleImage.jpeg')} alt="mainmenu" />
          <img className="profile-picture" src={this.props.url} alt="profile_pic" />
          <div className="profile-name">{this.props.name}</div>
        </div>

      )
    }
}

export default Header;
