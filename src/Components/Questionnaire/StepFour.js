import React from 'react';
import {Modal, Checkbox} from 'antd-mobile';
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
            <CheckboxItem key={key} checked={props.fields.stress === i.value} onChange= {() => props.selectStress(i.value)}>
              <div onClick= {() => showAlert(i, props.selectStress)}>
                {i.label}
              </div>
            </CheckboxItem>
        ))}
        <div className="listHeader"> In the last 4 weeks, I have felt productive...</div>
        {props.productivityArray.map((i,key) => (
          <CheckboxItem key={key} checked={props.fields.productivity === i.value} onChange= {() => props.selectProductivity(i.value)}>
            <div onClick= {() => showAlert(i, props.selectProductivity)}>
              {i.label}
            </div>
          </CheckboxItem>
        ))}
      </div>

  )

}

export default StepFour;
