import React from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;

var prossstyle={
  justifyContent: 'center',
  alignItems: 'center',
  //margin: '2%',
}

const steps = [{
  title: 'Step 1',
  // description: 'This is description',
}, {
  title: 'Step 2',
  // description: 'This is description',
}, {
  title: '',
  // description: 'This is description',
},{
  title: '',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

const CurrentStep = (props) => {
  return(
      <div style = {prossstyle}>
        <WingBlank mode={20} className="stepsExample">
          <WhiteSpace />
          <Steps current={3} direction="horizontal" size="small">{steps}</Steps>
        </WingBlank>
      </div>
  )
}
export default CurrentStep;
