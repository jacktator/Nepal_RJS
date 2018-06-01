import React from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

var stepstyle={
  justifyContent: 'center',
  alignItems: 'center',
}

const steps = [{
  title: 'Step 1',
  // description: 'This is description',
}, {
  title: 'Step 2',
  // description: 'This is description',
}, {
  title: 'Step 3',
  // description: 'This is description',
},{
  title: '...Waiting',
}].map((s) => <Step key={s.title} title={s.title} />);





const CurrentStep = (props) => {
  return(
      <div style = {{margin: '2%'}}>
        <WingBlank mode={20} className="stepsExample">
          <WhiteSpace />
          <Steps style={stepstyle} current={props.currentPage} direction="horizontal" size="small">{steps}</Steps>
        </WingBlank>
      </div>
  )
}
export default CurrentStep;
