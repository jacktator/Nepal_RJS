import React from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

const steps = [{
  title: 'Finished',
  // description: 'This is description',
}, {
  title: 'In Progress',
  // description: 'This is description',
}, {
  title: 'Waiting',
  // description: 'This is description',
},{
  title: 'In Progress',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

const CurrentStep = (props) => {
  return(
      <div style = {{ margin: '2%'}}>
        <WingBlank mode={20} className="stepsExample">
          <WhiteSpace />
          <Steps current={props.currentPage} direction="horizontal" size="small">{steps}</Steps>
        </WingBlank>
      </div>
  )
}
export default CurrentStep;
