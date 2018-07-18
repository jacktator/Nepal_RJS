import React from 'react';
import { List, Radio, NoticeBar, Modal} from 'antd-mobile';
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
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
        <h3 style={{textAlign: 'center', margin:"2% 0 0 0"}}>Stress and Productivity</h3>
        <List renderHeader={() => <h3 style={{margin:"2% 0 2% 0"}}>How often do you feel stressed at work? </h3>}>
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

        <List renderHeader={() => <h3 style={{margin:"2% 0 2% 0"}}>How productive do you feel each day?</h3>}>
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
