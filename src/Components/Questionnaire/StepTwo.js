import React from 'react';
import { Icon, List, Checkbox, Modal, WhiteSpace} from 'antd-mobile';

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
          <span style={{ float: 'left'}}> <strong> Days :</strong> </span>
          &nbsp;&nbsp;
          <span style={{ float: 'right', margin: "0 3% 0 0" }}>
            <button onClick={props.minus}>
              <Icon type="minus" style={{width:"12px", height: "12px"}}/>
            </button>&nbsp;
            <span>{props.days }</span>
            &nbsp;
            <button onClick={props.plus}>
              <Icon type="plus" style={{width:"12px", height: "12px"}}/>
            </button>
          </span>
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
