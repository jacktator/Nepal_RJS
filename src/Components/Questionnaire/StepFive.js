import React from 'react';
import { List, Radio, NoticeBar, Modal} from 'antd-mobile';
const RadioItem = Radio.RadioItem;const alert = Modal.alert;

const showAlert = (i, props) => {
  const alertInstance = alert(i.label, i.description, [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => props(i.value) },
  ]);
}
const StepFive = (props) => {

  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
      <h3 style={{textAlign: 'center'}}>Health and Wellbeing</h3>

      <List renderHeader={() => <strong>Do you experience injury or posture related pain at work? </strong>}>
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

    <List renderHeader={() => <h3>How do you feel your health and wellbeing right now? </h3>}>
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
