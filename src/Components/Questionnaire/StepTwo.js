import React from 'react';
import { List, Checkbox, Modal, WhiteSpace, Picker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (label, description, value, props) => {
  const alertInstance = alert(label, description, [
    { text: 'Cancel', style: 'default' },
    { text: 'Ok', onPress: () => props.change(value) },
  ]);
}

const StepTwo = (props) => {
  return(
    <div >
      <h2 style={{textAlign: 'center'}}>Create Your Program</h2>
      <div style={{ margin: "0 0 0 4%"}}>
        How many days per week do you want to go to the gym?
        <div>
          <Picker
            data={props.daysArray}
            locale={enUs}
            cols={1}
            value={[props.days]}
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
    {props.data.map(i => (
      <CheckboxItem key={i.value} checked={i.isChecked} onChange={() => props.change(i.value)}>
      <div onClick= {() => showAlert(i.label, i.description, i.value, props)}>
      <strong>{i.label}</strong><List.Item.Brief>{i.description}</List.Item.Brief>
      </div>
      </CheckboxItem>
    ))}
    </div>
    </div>
  )
}

export default StepTwo;
