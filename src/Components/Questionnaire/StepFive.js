import React from 'react';
import { List, Radio, NoticeBar, Modal} from 'antd-mobile';
import ShowNoticeBar from './NoticeBar';
const RadioItem = Radio.RadioItem;const alert = Modal.alert;

const showAlert = (i, props) => {
  alert(i.label, i.description, [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => props(i.value) },
  ]);
}
const StepFive = (props) => {

  return(
    <div>
      <ShowNoticeBar />
      <h3 style={{textAlign: 'center'}}>Health and Wellbeing</h3>
      <div className="listHeader"> Do you experience injury or posture related pain at work? </div>
      <List>
      {props.injuryArray.map((i,key) => (
        <div key={key} onClick= {() => showAlert(i, props.selectInjury)}>
          <RadioItem
            checked={props.fields.work_injury === i.value}
          >
              {i.label}
          </RadioItem>
        </div>
      ))}
    </List>
    <div className="listHeader"> How do you feel your health and wellbeing is right now? </div>
    <List>
      {props.healthArray.map((i,key) => (
        <div key={key} onClick= {() => showAlert(i, props.selectHealth)}>
          <RadioItem
            checked={props.fields.health_feeling === i.value}
          >
            {i.label}
          </RadioItem>
        </div>
        ))}
      </List>
    </div>

  )

}

export default StepFive;
