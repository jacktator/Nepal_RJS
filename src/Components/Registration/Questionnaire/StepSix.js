import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace, NoticeBar} from 'antd-mobile';
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
        value={[props.generalActivity.currentActivity]}
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
        value={[props.generalActivity.currentExercise]}
        onOk={v => props.selectExercise(v)}
        >
        <List.Item arrow="horizontal">Health:</List.Item>
      </Picker>

    </div>
  )

}

export default StepSix;
