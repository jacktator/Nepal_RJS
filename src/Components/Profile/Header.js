import React , {Component} from 'react';
import initialPic from '../../Assets/Profile/anon.png';
// the Header component of Profile, contains the background image, profile picture and name title
class Header extends Component {

    constructor(props) {
      super(props)
      this.state={
        file: initialPic
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
    }

    render() {
      return (
        <div>
          <img className="profile-image-sources" src={require('../../Assets/Workout/sampleImage.jpeg')} alt="mainmenu"/>
          <div className="profile-image-change">
            <div className="image-picker">
              <label for="add-picture">.</label>
              <input id="add-picture" type="file" onChange={this.handleChange}/>
              <img className="profile-picture" src={this.state.file} alt="profile_pic"/>
            </div>
          </div>
          <div className="profile-name"> Laxman Gautam</div>
        </div>

      )
    }
}

export default Header;
