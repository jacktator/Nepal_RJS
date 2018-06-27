import React from 'react';
import { Checkbox, Flex, Modal } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (value, description, props) => {
  const alertInstance = alert("Do you want to focus on:",description+"?", [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => props.change(value, 'forPosture') },
  ]);
}

const PostureCorrection = (props) => {
  return(
    <div>
      <h2 style={{textAlign: 'center'}}>Injury Management</h2>
      <div>
      <span>
        <h3> What is your current rehab focus? </h3>
      </span>
        {props.data.map((i,key) => (
          <Flex key={key}>
            <Flex.Item>
              <CheckboxItem key={i.value} checked={i.isChecked} onChange={() => props.change(i.value, 'forPosture')}>
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

export default PostureCorrection;
