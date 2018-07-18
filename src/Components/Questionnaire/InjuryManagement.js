import React from 'react';
import { Checkbox, Flex} from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

const InjuryManagement = (props) => {
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
                <CheckboxItem key={i.value} checked={i.isChecked} onChange={()=>props.change(i.value)}>
                  <div onClick = {() => props.showModal(i, 'forInjury')}>
                    <strong> {i.description} </strong>
                  </div>
                </CheckboxItem>
            </Flex.Item>
          </Flex>
          ))}
      </div>
    </div>
  )
}

export default InjuryManagement;
