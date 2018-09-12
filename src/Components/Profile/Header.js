import React , {Component} from 'react';
import initialPic from '../../Assets/Profile/anon.png';
import { ImagePicker } from 'antd-mobile';
// the Header component of Profile, contains the background image, profile picture and name title

class Header extends Component {
  state = {
      files: {},
    };

    onChange = (files, type, index) => {
      console.log(files, type, index);
      this.setState({
        files,
      });
    };

    

    constructor(props) {
      super(props)
      this.state={
        file: initialPic
      }
      this.handleChange = this.handleChange.bind(this)
    }

    // change photo
    handleChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
    }

    render() {
      const { files } = this.state;
      return (
        <div>
          <img className="profile-image-sources" src={require('../../Assets/Workout/sampleImage.jpeg')} alt="mainmenu"/>
          {/*<div className="profile-image-change">
            <div className="image-picker">
              <input id="add-picture" type="file" onChange={this.handleChange}/>
              <div>
          <ImagePicker
            files={files}
            onChange={this.onChange}

            accept="image/gif,image/jpeg,image/jpg,image/png"
          />
        </div>


              <img className="profile-picture" src={this.state.file} alt="profile_pic"/>
            </div>
      </div> */}
          <div className="profile-name">{this.props.name}</div>
        </div>

      )
    }
}

export default Header;
              // <label for="add-picture">.</label>
