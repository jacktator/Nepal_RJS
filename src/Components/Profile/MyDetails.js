import React from 'react';
import {DatePicker, List, Picker} from 'antd-mobile';
import {Modal} from 'antd-mobile';
import './Profile.css';
//import nameIcon from '../../Assets/Profile/nickname.svg'

const min = new Date("1948-01-01");
const max = new Date("2006-12-31");
//const data = [];
const prompt = Modal.prompt;

const MyDetails = (props) => {

   const height = [];
   const weight = [];
   weight.push(parseInt(props.fields.weight,10));
   height.push(parseInt(props.fields.height,10));

    return (
      <div style={{marginTop:"40px"}}>
        <div style={{display:'flex', height:'44px', alignItems:'center', paddingLeft:'15px', backgroundColor:'white'}}>
          <div style={{width:'85px'}}><div className="profile-name-icon"></div></div>
          <button
            style={{width:'255px', backgroundColor:'white', color:'#888', fontSize:'17px', height:'100%', textAlign:'start', border:'0', paddingLeft:'0'}}
            onClick={() => prompt('Change name', 'new name', [
            { text: 'Cancel' },
              { text: 'Submit', onPress: value => { props.updateName(value)} },
          ], 'default', '100')}
          >{props.name}</button>

        </div>

        <DatePicker
            mode="date"
            title={<div>Date of Birth</div>}
            value={new Date(props.fields.dateofbirth)}
            onOk={val => { props.updateBOD(`${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`); }}
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
          onOk={v => props.updateHeight(v[0])}
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
          onOk={v => { console.log(v); props.updateWeight(v[0]) }}
          >
          <List.Item className="weight-picker">
            <div className="profile-weight-icon"/>
          </List.Item>
        </Picker>

        </div>
    )
}

export default MyDetails;
