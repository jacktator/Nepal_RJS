import React from 'react';
import { List, Radio, NoticeBar, Modal} from 'antd-mobile';
const RadioItem = Radio.RadioItem;
const alert = Modal.alert;

const showAlert = (i, props) => {
  const alertInstance = alert(i.label, i.description, [
    { text: 'Cancel', style: 'default' },
    { text: 'Ok', onPress: () => props(i.value) },
  ]);
}
const StepSix = (props) => {
  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
      <h2 style={{textAlign: 'center'}}>General Activity and Exercise Level</h2>

      <List renderHeader={() => <h3>How active are you on a daily basis? </h3>}>
      {props.activityArray.map((i,key) => (
        <RadioItem
          key={key}
          checked={props.fields.daily_activity === i.value}
          onChange={() => props.selectActivity(i.value)}>
          <div onClick= {() => showAlert(i, props.selectActivity)}>
            {i.label} ({i.value}/5) <List.Item.Brief>{i.description}</List.Item.Brief>
          </div>
        </RadioItem>
      ))}
    </List>
    <List renderHeader={() => <h3>What is your current exercise activity level? </h3>}>
    {props.exerciseArray.map((i,key) => (
      <RadioItem
        key={key}
        checked={props.fields.current_activity === i.value}
        onChange={() => props.selectExercise(i.value)}>
        <div onClick= {() => showAlert(i, props.selectExercise)}>
          {i.label} ({i.value}/5) <List.Item.Brief>{i.description}</List.Item.Brief>
        </div>
      </RadioItem>
    ))}
  </List>
    </div>
  )

}

export default StepSix;
