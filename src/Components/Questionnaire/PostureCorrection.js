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
              <div onClick = {() => props.showModal(i,'forPosture' )}>
                <CheckboxItem key={i.value} checked={i.isChecked}>
                    { i.description }
                </CheckboxItem>
              </div>
            </Flex.Item>
          </Flex>
          ))}
      </div>
    </div>
  )
}

export default PostureCorrection;
