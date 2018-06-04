import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace, NoticeBar} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const StepFour = (props) => {

  return(
    <div>
      <NoticeBar icon={null}>
        The following information is anonymous
        </NoticeBar>
        <h2 style={{textAlign: 'center'}}>Stress and Productivity</h2>
        <br/><br/>

        <p>How often do you feel stressed at work?</p>
        <Picker
          locale={enUs}
          data={props.stressArray}
          cols={1}
          value={[props.stressAndProductivity.currentStress]}
          onOk={v => props.selectStress(v)}
          >
          <List.Item arrow="horizontal">Stress:</List.Item>
        </Picker>
        <br/><br/>

        <p>How productive do you feel each day?</p>
        <Picker
          locale={enUs}
          data={props.productivityArray}
          cols={1}
          value={[props.stressAndProductivity.currentProductivity]}
          onOk={v => props.selectProductivity(v)}
          >
          <List.Item arrow="horizontal">Productivity:</List.Item>
        </Picker>
      </div>

  )

}

export default StepFour;
