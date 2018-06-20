import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace, NoticeBar, Modal} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
const RadioItem = Radio.RadioItem;const alert = Modal.alert;

const showAlert = (i, props) => {
  const alertInstance = alert(i.label, i.description, [
    { text: 'Cancel', style: 'default' },
    { text: 'Ok', onPress: () => props(i.value) },
  ]);
}
const StepFive = (props) => {

  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
      <h2 style={{textAlign: 'center'}}>Health and Wellbeing</h2>

      <List renderHeader={() => <h3>Do you experience injury or posture related pain at work? </h3>}>
      {props.injuryArray.map((i,key) => (
        <RadioItem
          key={key}
          checked={props.fields.work_injury === i.value}
          onChange={() => props.selectInjury(i.value)}>
          <div onClick= {() => showAlert(i, props.selectInjury)}>
            {i.label} ({i.value}/5) <List.Item.Brief>{i.description}</List.Item.Brief>
          </div>
        </RadioItem>
      ))}
    </List>

    <List renderHeader={() => <h3>How do you feel your health and wellbeing right now? </h3>}>
      {props.healthArray.map((i,key) => (
        <RadioItem
          key={key}
          checked={props.fields.health_feeling === i.value}
          onChange={() => props.selectHealth(i.value)}
        >
        <div onClick= {() => showAlert(i, props.selectHealth)}>
          {i.label} ({i.value}/4) <List.Item.Brief>{i.description}</List.Item.Brief>
        </div>
        </RadioItem>
        ))}
      </List>
    </div>

  )

}

export default StepFive;
