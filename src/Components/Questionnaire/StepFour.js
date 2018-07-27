import React from 'react';
import {Modal, Checkbox,Flex} from 'antd-mobile';
import ShowNoticeBar from './NoticeBar';
import './Questionnaire.css';
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (i, props) => {
  alert(i.label, i.description, [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => props(i.value) },
  ]);
}

const StepFour = (props) => {
  return(
    <div>
      <div className="noticebar">
        <ShowNoticeBar />
      </div>
        <h3 style={{textAlign: 'center', margin:"2% 0 0 0"}}>Stress and Productivity</h3>
        <div className="listHeader">
            How often do you feel stressed at work?
        </div>
        {props.stressArray.map((i,key) => (
          <Flex key={key}>
            <Flex.Item>
              <div onClick= {() => showAlert(i, props.selectStress)}>
                <CheckboxItem key={key} checked={props.fields.stress === i.value}>
                  {i.label}
                </CheckboxItem>
              </div>
            </Flex.Item>
          </Flex>
        ))}
        <div className="listHeader"> In the last 4 weeks, I have felt productive...</div>
        {props.productivityArray.map((i,key) => (
          <Flex key={key}>
            <Flex.Item>
              <div onClick= {() => showAlert(i, props.selectProductivity)}>
                <CheckboxItem key={key} checked={props.fields.productivity === i.value}>
                  {i.label}
                </CheckboxItem>
              </div>
            </Flex.Item>
          </Flex>
        ))}
      </div>

  )

}

export default StepFour;
