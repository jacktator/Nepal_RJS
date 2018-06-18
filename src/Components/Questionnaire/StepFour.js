import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace, NoticeBar} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
const RadioItem = Radio.RadioItem;
const StepFour = (props) => {

  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
        <h2 style={{textAlign: 'center'}}>Stress and Productivity</h2>

        <List renderHeader={() => 'How often do you feel stressed at work?'}>
        {props.stressArray.map(i => (
          <RadioItem
              key={i.value}
              checked={props.fields.stress === i.value}
              onChange={() => props.selectStress(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>

        <List renderHeader={() => 'How productive do you feel each day?'}>
        {props.productivityArray.map(i => (
          <RadioItem
              key={i.value}
              checked={props.fields.productivity === i.value}
              onChange={() => props.selectProductivity(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>

      </div>

  )

}

export default StepFour;
