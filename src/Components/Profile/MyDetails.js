import React ,{Component} from 'react';
import {InputItem, DatePicker, List, Picker} from 'antd-mobile';
import {Accordion, Toast, Button, ImagePicker, Modal, ActivityIndicator} from 'antd-mobile';
import axios from 'axios';
import './Profile.css';

const min = new Date("1948-01-01");
const max = new Date("2006-12-31");
const data = [];

const MyDetails = (props) => {
  // constructor(props) {
  //   super(props)
  //   this.state={
  //     files: data,
  //     modal: false,
  //     animating: false,
  //   }
  // }
  //
  //
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
  // onChange = (files, type, index) => {
  //   console.log(files);
  //   this.setState({
  //     files,
  //   });
  // };
  //
  // updateFinish() {
  //   this.setState({ animating: false });
  // }

   const height = [];
   const weight = [];
   const date = new Date(props.fields.birthDate);
   weight.push(parseInt(props.fields.weight,10));
   height.push(parseInt(props.fields.height,10));

    return (
      <div style={{marginTop:"40px"}}>
        <InputItem placeholder="Name"
         value={props.name}
         style={{color:"grey"}}
         maxLength={30}
         onChange={(v) => props.nameHandler(v)}>
        <div className="profile-name-icon"/>
        </InputItem>

        <DatePickser
            mode="date"
            title={<div>Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;</div>}
            value={date}
            onChange={v => props.selectBirthDate(v)}
            minDate={min}
            maxDate={max}>
            <List.Item className="date-of-birth" ><div className="profile-birthday-icon"/></List.Item>
        </DatePicker>

        <Picker
          data={props.heightArray}
          cols={1}
          extra=" "
          title={<div>Height(cm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
          value={[height[0]]}
          onOk={v => props.selectHeight(v)}
          >
          <List.Item className="height-picker">
            <div className="profile-height-icon"/>
          </List.Item>
        </Picker>

        <Picker
          data={props.weightArray}
          cols={1}
          extra=" "
          title={<div>Weight(kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
          value={[weight[0]]}
          onOk={v => props.selectWeight(v)}
          >
          <List.Item className="weight-picker">
            <div className="profile-weight-icon"/>
          </List.Item>
        </Picker>

        {/*<div>
        <Button onClick={this.showModal('modal')}>Change Avatar</Button>
        <ActivityIndicator
        toast
        text="updating..."
        animating={this.state.animating}
      />

      <Modal
        visible={this.state.modal}
        transparent
        maskClosable={false}
        onClose={this.onClose('modal')}
        title="Title"
        footer={[{ text: 'Ok', onPress: () => { props.uploadPicture(this.state.files[0].file); this.onClose('modal')(); this.setState({ animating: true }) } }]}
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
        </div>*/}
        </div>
    )
}

export default MyDetails;
