import React from 'react';
import { Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;


const PostureCorrection = (props) => {
  return(
    <div>
      <h2 style={{textAlign: 'center'}}>Posture Correction</h2>
      <div>
      <div className="listHeader">
        What is your current rehab focus?
      </div>
        {props.data.map((i,key) => (
          <Flex key={key}>
            <Flex.Item>
            <CheckboxItem key={i.value} checked={i.isChecked} onChange={() => props.change(i.value)}>
                <div onClick = {() => i.value !== "0" ? props.showModal(i,'forPosture' ) : props.change(i.value)}>
                    { i.description }
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
