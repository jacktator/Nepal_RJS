import React from 'react';
import { List, Radio, NoticeBar, Modal} from 'antd-mobile';
import ShowNoticeBar from './NoticeBar';
const RadioItem = Radio.RadioItem;
const alert = Modal.alert;

const showAlert = (i, props) => {
  alert(i.label, i.description, [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => props(i.value) },
  ]);
}
const StepSix = (props) => {
  return(
    <div>
      <ShowNoticeBar />
      <h2 style={{textAlign: 'center'}}>General Activity and Exercise Level</h2>
      <div className="listHeader"> How active are you on a daily basis?</div>
      <List>
      {props.activityArray.map((i,key) => (
        <div key={key} onClick= {() => showAlert(i, props.selectActivity)}>
          <RadioItem
            checked={props.fields.daily_activity === i.value}
            >
            {i.label}
          </RadioItem>
        </div>
      ))}
    </List>
    <div className="listHeader">How many days per week do you currently exercise?</div>
    <List>
    {props.exerciseArray.map((i,key) => (
      <div key={key} onClick= {() => showAlert(i, props.selectExercise)}>
        <RadioItem
          checked={props.fields.current_activity === i.value}
          >
            {i.label}
        </RadioItem>
      </div>
    ))}
  </List>
    </div>
  )

}

export default StepSix;
