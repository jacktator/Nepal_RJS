import React , {Component} from 'react';
import initialPic from '../../Assets/Profile/anon.png';
import { ImagePicker } from 'antd-mobile';
// the Header component of Profile, contains the background image, profile picture and name title

class Header extends Component {
    constructor(props) {
      super(props)
      this.state={
        files: [{ url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg', id: '123123' }]
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
          <img className="profile-picture" src={this.state.files[0].url} alt="profile_pic" />
          <ImagePicker
            length="1"
            className="profile-picture"
            style={{ zIndex: '100' }}
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            //selectable={false}
          />
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


            </div>
      </div> */}
          <div className="profile-name">{this.props.name}</div>
        </div>

      )
    }
}

export default Header;
              // <label for="add-picture">.</label>
