import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace, NoticeBar} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const StepFive = (props) => {

  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
      <h2 style={{textAlign: 'center'}}>Health and Wellbeing</h2>
      <br/><br/>

      <p>Do you experience injury or posture related pain at work?</p>
      <Picker
        locale={enUs}
        data={props.injuryArray}
        cols={1}
        value={[props.healthAndWellbeing.currentInjury]}
        onOk={v => props.selectInjury(v)}
        >
        <List.Item arrow="horizontal">Injury:</List.Item>
      </Picker>
      <br/><br/>

      <p>How do you feel your health and wellbeing right now?</p>
      <Picker
        locale={enUs}
        data={props.healthArray}
        cols={1}
        value={[props.healthAndWellbeing.currentHealth]}
        onOk={v => props.selectHealth(v)}
        >
        <List.Item arrow="horizontal">Health:</List.Item>
      </Picker>

    </div>

  )

}

export default StepFive;
