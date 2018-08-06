import React , {Component} from 'react';
import initialPic from '../../Assets/Profile/anon.png';
class ImagePicker extends React.Component {

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
      <div className="image-picker">
        <label for="add-picture">.</label>
        <input id="add-picture" type="file" onChange={this.handleChange}/>
        <img className="profile-picture" src={this.state.file}/>
      </div>
    );
  }
}


export default ImagePicker;
