import React from 'react';
import { Icon, List, Checkbox} from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

const StepTwo = (props) => {
  return(
    <div>
      <div>
        <span style={{ marginLeft: "50px"}}> <strong> Days :</strong> </span>
        &nbsp;&nbsp;
        <span>
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
      <br />
      <div>

        {props.data.map(i => (
          <CheckboxItem key={i.value} onChange={() => props.change(i.value)}>
            <strong>{i.label}</strong><List.Item.Brief>{i.description}</List.Item.Brief>
          </CheckboxItem>
        ))}
      </div>
    </div>
  )
}

export default StepTwo;
