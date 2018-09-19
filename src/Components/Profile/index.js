import React , {Component} from 'react';
import Header from './Header';
import MyDetails from './MyDetails';
import AccountDetails from './AccountDetails';
import Footer from './Footer';
import axios from 'axios';

import './Profile.css';
import {Accordion,List,InputItem,Toast,Button,ImagePicker, Modal} from 'antd-mobile';
const Item = List.Item;
const prompt = Modal.prompt;
// const data = [];

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
// The first level of the profile page, separates into 4 sections:
// Header: background image, and ImagePicker,
// MyDetails: name, birthday, height,weight
// AccountDetails: change password, change Email
// Footer: View terms, logout

class Profile extends Component{
  constructor(props) {
    super(props)
    this.state={
      // files: data,
      // modal: false,
    }
  }

  // uploadPicture = () => {
  //   let token = localStorage.getItem('token');
  //   axios({
  //     method: 'post',
  //     url: 'https://nepal.sk8tech.io/wp-json/wp/v2/media',
  //     headers: {
  //       'Authorization': "Bearer" + token,
  //       'Content-Disposition': `attachment; filename=photo.jpeg`,
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     data: {
  //       date : "2015-11-26 10:00:00",
  //       date_gmt : "2015-11-26 09:00:00",
  //       modified : "2015-11-26 10:00:00",
  //       modified_gmt : "2015-11-26 09:00:00",
  //       status : "future",
  //       title: "Titre media",
  //       description : "description media",
  //       media_type : this.state.files[0].type,
  //       source_url : this.state.files[0].url }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error.response);
  //   });
  // }

  // showModal = key => (e) => {
  //   e.preventDefault(); // 修复 Android 上点击穿透
  //   this.setState({
  //     [key]: true,
  //   });
  // }
  // onClose = key => () => {
  //   this.setState({
  //     [key]: false,
  //   });
  // }
  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }
  // onChange = (files, type, index) => {
  //   console.log(files, type, index);
  //   this.setState({
  //     files,
  //   });
  // };

  render(){
    return (
      <div className="profile-container">
          <div className= "profile-image-containers">
              <Header name={this.props.name} url={this.props.fields.photo} />
          </div>
          <div className="profile-list-view-container">
              {/*<Button onClick={this.showModal('modal')}>Change Avatar</Button>
              <Modal
                    visible={this.state.modal}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal')}
                    title="Title"
                    footer={[{ text: 'Ok', onPress: () => { this.uploadPicture(); this.onClose('modal')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
              >
                 <div>
                  <ImagePicker
                   length="1"
                   files={this.state.files}
                   onChange={this.onChange}
                   onImageClick={(index, fs) => console.log(index, fs)}
                   selectable={this.state.files.length < 1}
                   />
                </div>
              </Modal>*/}
                  <MyDetails
                  name = {this.props.name}
                  heightArray={this.props.heightArray}
                  weightArray={this.props.weightArray}
                  nameHandler={this.props.nameHandler}
                  selectBirthDate ={this.props.selectBirthDate}
                  selectHeight= {this.props.selectHeight}
                  selectWeight= {this.props.selectWeight}
                  fields={this.props.fields}
                  />
                  <AccountDetails
                  selectEmail={this.props.selectEmail}
                  putPassword={this.props.putPassword}
                  onSavePassword={this.props.onSavePassword}
                  fields={this.props.fields}
                  passError = {this.props.passError}
                  files={this.state.files}
                  />
                 <Footer/>
            </div>
      </div>
    );
  }
}

export default Profile;
