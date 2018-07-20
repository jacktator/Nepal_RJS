import React from 'react';
import { List, Checkbox, Modal, WhiteSpace, Picker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (data, props) => {
  alert(data.label, data.description, [
    { text: 'Go Back', style: 'default' },
    { text: 'Select', onPress: () => props.change(data.value) },
  ]);
}

const display = (data, key, props) => {
  if(data.usedFor === props.excercisePlace || data.usedFor === 'both' ){
    return (
      <CheckboxItem key={key} checked={data.isChecked} onChange={() => props.change(data.value)}>
        <div onClick= {() => showAlert(data, props)}>
          <strong>{data.label}</strong>
        </div>
      </CheckboxItem>
    )
  }
}

const Program = (props) => {
  const days = [];
  days.push(parseInt(props.days,10));
  return(
    <div >
      <h2 style={{textAlign: 'center'}}>Create Your Program</h2>
      <div style={{ margin: "0 4 0 4%"}}>
        How many days per week do you want to go to the gym?
        <div>
          <Picker
            data={props.daysArray}
            locale={enUs}
            cols={1}
            value={[days[0]]}
            onOk={v => props.selectDays(v)}
            >
            <List.Item arrow="horizontal">Days:</List.Item>
          </Picker>
        </div>
    </div>
    <WhiteSpace/>
    <WhiteSpace/>
    <WhiteSpace/>
    <div>
    <span style={{ margin: "0 0 0 4%"}}>
      Traning Goals:
    </span>
    {props.data.map((i,key) => (
        display(i, key, props)
    ))}
    </div>
    </div>
  )
}

export default Program;
