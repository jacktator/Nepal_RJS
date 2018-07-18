import React from 'react';
import { List, Checkbox, Modal, WhiteSpace, Picker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (i, props) => {
  const alertInstance = alert(i.label, i.description, [
    { text: 'Go Back', style: 'default' },
    { text: 'Select', onPress: () => props.change(i.value) },
  ]);
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
        <CheckboxItem checked={i.isChecked} onChange={() => props.change(i.value)}>
          <div onClick= {() => showAlert(i, props)}>
            <strong>{i.label}</strong>
          </div>
        </CheckboxItem>
    ))}
    </div>
    </div>
  )
}

export default Program;
