import React from 'react';
import { Modal, Checkbox,Flex} from 'antd-mobile';
import ShowNoticeBar from './NoticeBar';
import './Questionnaire.css';
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (i, handler) => {
  alert(i.label, i.description, [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => handler(i.value) },
  ]);
}
const StepFive = (props) => {

  return(
    <div>
      <div className="noticebar">
        <ShowNoticeBar />
      </div>
      <h3 style={{textAlign: 'center'}}>Health and Wellbeing</h3>
      <div className="listHeader"> Do you experience injury or posture related pain at work? </div>
      {props.injuryArray.map((i,key) => (
        <Flex key={key}>
          <Flex.Item>
            <div onClick= {() => showAlert(i, props.selectInjury)}>
              <CheckboxItem key={key} checked={props.fields.work_injury === i.value} >
                {i.label}
              </CheckboxItem>
            </div>
          </Flex.Item>
        </Flex>
      ))}
    <div className="listHeader"> How do you feel your health and wellbeing is right now? </div>
      {props.healthArray.map((i,key) => (
        <Flex key={key}>
          <Flex.Item>
            <div onClick= {() => showAlert(i, props.selectHealth)}>
              <CheckboxItem  key={key} checked={props.fields.health_feeling === i.value} >
                {i.label}
              </CheckboxItem>
            </div>
          </Flex.Item>
        </Flex>
        ))}
    </div>
  )

}

export default StepFive;
