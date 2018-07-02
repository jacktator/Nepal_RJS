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

const StepFour = (props) => {
  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
        <h3 style={{textAlign: 'center'}}>Stress and Productivity</h3>

        <List renderHeader={() => <h3>How often do you feel stressed at work? </h3>}>
        {props.stressArray.map((i,key) => (
          <div onClick= {() => showAlert(i, props.selectStress)}>
            <RadioItem
              key={key}
              checked={props.fields.stress === i.value}
            >
              {i.label}
            </RadioItem>
          </div>
        ))}
      </List>

        <List renderHeader={() => <h3>How productive do you feel each day?</h3>}>
        {props.productivityArray.map((i,key) => (
          <div onClick= {() => showAlert(i, props.selectProductivity)}>
          <RadioItem
              key={i.value}
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
