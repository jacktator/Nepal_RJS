import React from 'react';
import {InputItem, DatePicker, List, Picker} from 'antd-mobile';

const min = new Date("1948-01-01");
const max = new Date("2006-12-31");

const MyDetails = (props) => {
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
      <DatePicker
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
      </div>
    )
}

export default MyDetails;
