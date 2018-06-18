import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace, NoticeBar, Button} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const StepSix = (props) => {

  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
      <h2 style={{textAlign: 'center'}}>General Activity and Exercise Level</h2>
      <br/><br/>

      <p>How active are you on a daily basis?</p>
      <Picker
        locale={enUs}
        data={props.activityArray}
        cols={1}
        value={[props.fields.daily_activity]}
        onOk={v => props.selectActivity(v)}
        >
        <List.Item arrow="horizontal">Injury:</List.Item>
      </Picker>
      <br/><br/>

      <p>What is your current exercise activity level?</p>
      <Picker
        locale={enUs}
        data={props.exerciseArray}
        cols={1}
        value={[props.fields.current_activity]}
        onOk={v => props.selectExercise(v)}
        >
        <List.Item arrow="horizontal">Health:</List.Item>
      </Picker>
    </div>
  )

}

export default StepSix;
