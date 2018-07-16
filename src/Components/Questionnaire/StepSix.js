import React from 'react';
import { List, Radio, NoticeBar, Modal} from 'antd-mobile';
const RadioItem = Radio.RadioItem;
const alert = Modal.alert;

const showAlert = (i, props) => {
  const alertInstance = alert(i.label, i.description, [
    { text: 'Go back', style: 'default' },
    { text: 'Select', onPress: () => props(i.value) },
  ]);
}
const StepSix = (props) => {
  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
      <h2 style={{textAlign: 'center'}}>General Activity and Exercise Level</h2>

      <List renderHeader={() => <h3 style={{margin:"2% 0 2% 0"}}>How active are you on a daily basis? </h3>}>
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
    <List renderHeader={() => <h3 style={{margin:"2% 0 2% 0"}}>What is your current exercise activity level? </h3>}>
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
