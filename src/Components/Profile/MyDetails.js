import React , {Component} from 'react';
import {InputItem, DatePicker, List, Picker} from 'antd-mobile';

const Item = List.Item;
const birthday = new Date("1995-03-25");
const min = new Date("1948-01-01");
const max = new Date("2006-12-31");

const MyDetails = (props) => {
  const height = [];
  let weight = [];
  weight.push(parseInt(props.fields.weight,10));


/*
  //Change Name
 onNameChange =(name)=>{
   this.setState({
     name,
   })
 }

 //Change birthDate
 onBirthDateChange =(birthDate)=>{
  this.setState({
    birthDate,
  })
 }

//Change height
onHeightChange =(height)=>{
 this.setState({
   height,
 })
}

 //Change weight
onWeightChange =(weight)=>{
  this.setState({
    weight,
  })
}*/
    return (
      <div style={{marginTop:"40px"}}>
      <InputItem placeholder="Name"
       value={props.name}
       onChange={this.onNameChange}>
      <div className="profile-name-icon"/>
      </InputItem>
      <DatePicker
          mode="date"
          title={<div>Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;</div>}
          value={props.birthDate}
          onChange={date => this.setState({birthDate:date})}
          minDate={min}
          maxDate={max}>
          <List.Item className="date-of-birth" ><div className="profile-birthday-icon"/></List.Item>
      </DatePicker>
      <Picker
        data={props.heightArray}
        cols={1}
        extra=" "
        title={<div>Height&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
        value={[height[0]]}
        //onOk={v => props.selectHeight(v)}
        >
        <List.Item>
          <div className="profile-height-icon"/>
        </List.Item>
      </Picker>
      <Picker
        data={props.weightArray}
        cols={1}
        extra=" "
        title={<div>Weight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
        value={[weight[0]]}
        onOk={v => props.selectWeight(v)}
        >
        <List.Item>
          <div className="profile-weight-icon"/>
        </List.Item>
      </Picker>
      </div>
    )
}

export default MyDetails;
