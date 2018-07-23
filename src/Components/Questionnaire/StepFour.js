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

const StepFour = (props) => {
  return(
    <div>
      <ShowNoticeBar />
        <h3 style={{textAlign: 'center', margin:"2% 0 0 0"}}>Stress and Productivity</h3>
        <div className="listHeader">
            How often do you feel stressed at work?
        </div>
        <List>
        {props.stressArray.map((i,key) => (
          <div key={key} onClick= {() => showAlert(i, props.selectStress)}>
            <RadioItem
              checked={props.fields.stress === i.value}
            >
              {i.label}
            </RadioItem>
          </div>
        ))}
      </List>
        <div className="listHeader"> In the last 4 weeks, I have felt productive...</div>
        <List>
        {props.productivityArray.map((i,key) => (
          <div key={key} onClick= {() => showAlert(i, props.selectProductivity)}>
          <RadioItem
              checked={props.fields.productivity === i.value}
            >
              {i.label}
          </RadioItem>
          </div>
        ))}
      </List>

      </div>

  )

}

export default StepFour;
