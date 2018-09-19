import React ,{Component} from 'react';
import {InputItem, DatePicker, List, Picker} from 'antd-mobile';
import {Accordion, Toast, Button, ImagePicker, Modal} from 'antd-mobile';
import axios from 'axios';
import './Profile.css';

const min = new Date("1948-01-01");
const max = new Date("2006-12-31");
const data = [];

class MyDetails extends Component {

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
        </div>
    )
}
}

export default MyDetails;
