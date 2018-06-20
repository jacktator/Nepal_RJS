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

const StepFour = (props) => {
  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
        <h2 style={{textAlign: 'center'}}>Stress and Productivity</h2>

        <List renderHeader={() => <h3>How often do you feel stressed at work? </h3>}>
        {props.stressArray.map((i,key) => (
          <RadioItem
            key={key}
            checked={props.fields.stress === i.value}
            onChange={() => props.selectStress(i.value)}>
            <div onClick= {() => showAlert(i, props.selectStress)}>
              {i.label} ({i.value}/5) <List.Item.Brief>{i.description}</List.Item.Brief>
            </div>
          </RadioItem>
        ))}
      </List>

        <List renderHeader={() => <h3>How productive do you feel each day?</h3>}>
        {props.productivityArray.map((i,key) => (
          <RadioItem
              key={i.value}
              checked={props.fields.productivity === i.value}
              onChange={() => props.selectProductivity(i.value)}>
            <div onClick= {() => showAlert(i, props.selectProductivity)}>
              {i.label} ({i.value}/5) <List.Item.Brief>{i.description}</List.Item.Brief>
            </div>
          </RadioItem>
        ))}
      </List>

      </div>

  )

}

export default StepFour;
