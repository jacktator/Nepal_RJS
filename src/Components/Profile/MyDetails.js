import React ,{Component} from 'react';
import {InputItem, DatePicker, List, Picker} from 'antd-mobile';
import {Accordion, Toast, Button, ImagePicker, Modal} from 'antd-mobile';
import axios from 'axios';
import './Profile.css';

const min = new Date("1948-01-01");
const max = new Date("2006-12-31");
const data = [];

class MyDetails extends Component {

  constructor(props) {
    super(props)
    this.state={
      files: data,
      modal: false,
    }
  }
  uploadPicture = () => {
    let token = localStorage.getItem('token');
    axios({
      method: 'post',
      url: 'https://nepal.sk8tech.io/wp-json/wp/v2/media',
      headers: {
        'Authorization': "Bearer" + token,
        'Content-Disposition': `attachment; filename=photo.jpeg`,
        'Content-Type': 'multipart/form-data'
      },
      data: {
        date : "2015-11-26 10:00:00",
        date_gmt : "2015-11-26 09:00:00",
        modified : "2015-11-26 10:00:00",
        modified_gmt : "2015-11-26 09:00:00",
        status : "future",
        title: "Titre media",
        description : "description media",
        media_type : this.state.files[0].type,
        source_url : this.state.files[0].url }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

 render(){
   const height = [];
   const weight = [];
   const date = new Date(this.props.fields.birthDate);
   weight.push(parseInt(this.props.fields.weight,10));
   height.push(parseInt(this.props.fields.height,10));

    return (
      <div style={{marginTop:"40px"}}>
        <InputItem placeholder="Name"
         value={this.props.name}
         style={{color:"grey"}}
         maxLength={30}
         onChange={(v) => this.props.nameHandler(v)}>
        <div className="profile-name-icon"/>
        </InputItem>

        <DatePicker
            mode="date"
            title={<div>Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;</div>}
            value={date}
            onChange={v => this.props.selectBirthDate(v)}
            minDate={min}
            maxDate={max}>
            <List.Item className="date-of-birth" ><div className="profile-birthday-icon"/></List.Item>
        </DatePicker>

        <Picker
          data={this.props.heightArray}
          cols={1}
          extra=" "
          title={<div>Height(cm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
          value={[height[0]]}
          onOk={v => this.props.selectHeight(v)}
          >
          <List.Item className="height-picker">
            <div className="profile-height-icon"/>
          </List.Item>
        </Picker>

        <Picker
          data={this.props.weightArray}
          cols={1}
          extra=" "
          title={<div>Weight(kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
          value={[weight[0]]}
          onOk={v => this.props.selectWeight(v)}
          >
          <List.Item className="weight-picker">
            <div className="profile-weight-icon"/>
          </List.Item>
        </Picker>

        <div>
          <Button  className="change-avatar-button" onClick={this.showModal('modal')}>Change Avatar</Button>
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
          </Modal>
        </div>
      </div>
    )
}
}

export default MyDetails;
