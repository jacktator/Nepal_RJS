import React from 'react';
import { Checkbox, Flex, Modal } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;
// <CheckboxItem checked={data.isChecked} onChange={() => props.change(data.value)}>
//   <label>
//   <img style={{ height:"100px", width:"300px"}} src={data.imgurl}  alt={data.description}/>
//   </label>
// </CheckboxItem>
const showAlert = (value, description, props) => {
  const alertInstance = alert("Do you want to focus on:",description+"?", [
    { text: 'Cancel', style: 'default' },
    { text: 'Ok', onPress: () => props.change(value) },
  ]);
}

const StepThree = (props) => {
  return(
    <div>
      <h2 style={{textAlign: 'center'}}>Injury Management</h2>
      <div>
      <span>
        <h3> What is your current rehab focus? </h3>
      </span>
        {props.data.map(i => (
          <Flex>
            <Flex.Item>
              <CheckboxItem key={i.value} checked={i.isChecked} onChange={() => props.change(i.value)}>
                <div onClick = {() => showAlert(i.value, i.description, props)}>
                <img style={{ height:"80px", width:"200px"}} src={i.imgurl}  alt={i.description}/>
                </div>
              </CheckboxItem>
            </Flex.Item>
          </Flex>
          ))}

      </div>
    </div>
  )
}

export default StepThree;
