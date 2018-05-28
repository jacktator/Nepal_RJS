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

const Progress = (props) => {
  return(
      <div>
        <WingBlank mode={20} className="stepsExample">
          <div className="sub-title">Horizontal small size</div>
          <WhiteSpace />
          <Steps current={3} direction="horizontal" size="small">{steps}</Steps>
        </WingBlank>
      </div>
  )
}

export default Progress;
