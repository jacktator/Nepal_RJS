import React from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;
const waitingIcon = () => (
  <svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    width="20" height="20">
    <defs />
    <path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512S793.6 1024 512 1024zM512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z"
    fill="#707070" />
    <path d="M298.666667 512m-85.333333 0a2 2 0 1 0 170.666667 0 2 2 0 1 0-170.666667 0Z"
    fill="#707070" />
    <path d="M512 512m-85.333333 0a2 2 0 1 0 170.666667 0 2 2 0 1 0-170.666667 0Z"
    fill="#707070" />
    <path d="M725.333333 512m-85.333333 0a2 2 0 1 0 170.666667 0 2 2 0 1 0-170.666667 0Z"
    fill="#707070" />
</svg>
)
const processIcon = () => (
  <svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
  width="22" height="22">
    <defs />
    <path d="M661.333333 170.666667l253.866667 34.133333-209.066667 209.066667zM362.666667 853.333333L108.8 819.2l209.066667-209.066667zM170.666667 362.666667L204.8 108.8l209.066667 209.066667z"
    fill="#d81e06" />
    <path d="M198.4 452.266667l-89.6 17.066666c-2.133333 14.933333-2.133333 27.733333-2.133333 42.666667 0 98.133333 34.133333 192 98.133333 264.533333l64-55.466666C219.733333 663.466667 192 588.8 192 512c0-19.2 2.133333-40.533333 6.4-59.733333zM512 106.666667c-115.2 0-217.6 49.066667-292.266667 125.866666l59.733334 59.733334C339.2 230.4 420.266667 192 512 192c19.2 0 40.533333 2.133333 59.733333 6.4l14.933334-83.2C563.2 108.8 537.6 106.666667 512 106.666667zM825.6 571.733333l89.6-17.066666c2.133333-14.933333 2.133333-27.733333 2.133333-42.666667 0-93.866667-32-185.6-91.733333-258.133333l-66.133333 53.333333c46.933333 57.6 72.533333 130.133333 72.533333 202.666667 0 21.333333-2.133333 42.666667-6.4 61.866666zM744.533333 731.733333C684.8 793.6 603.733333 832 512 832c-19.2 0-40.533333-2.133333-59.733333-6.4l-14.933334 83.2c25.6 4.266667 51.2 6.4 74.666667 6.4 115.2 0 217.6-49.066667 292.266667-125.866667l-59.733334-57.6z"
    fill="#d81e06" />
    <path d="M853.333333 661.333333l-34.133333 253.866667-209.066667-209.066667z"
    fill="#d81e06" />
</svg>
)

const completeIcon = () => (
  <svg className="icon" viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg"
data-spm-anchor-id="a313x.7781069.0.i3" width="20" height="20">
    <defs />
    <path d="M150.785576 149.276523C228.480718 71.581381 328.673402 21.185039 439.359854 5.28626c135.307748-19.418786 270.142995 15.050028 379.566945 97.012678 109.4477 81.98765 180.42533 201.680369 199.862866 337.011867 40.132573 279.463012-154.612783 539.369738-433.934545 579.526061-117.130214 16.807531-237.231684-7.733764-338.200619-69.036376-17.270032-10.498769-22.753792-32.99881-12.280022-50.240092 10.571269-17.138781 32.96381-22.777542 50.235092-12.278772 86.488908 52.568846 189.424097 73.587635 289.853031 59.153858 239.370438-34.330063 406.295744-257.161721 371.934431-496.72841C929.748252 333.715611 868.906891 231.137923 775.080469 160.887795 681.271547 90.608916 565.717586 61.107612 449.756124 77.782642 210.121935 112.122705 43.276629 334.980613 77.689192 574.492302c9.018767 62.700115 30.791306 121.293972 64.795119 174.116569 10.90877 17.016281 5.947511 39.716323-10.93752 50.546343-16.986281 10.93752-39.638823 6.026261-50.546343-10.93752C41.307876 726.45133 15.864079 658.091205 5.29156 584.888571c-19.418786-135.312748 15.025028-270.181745 97.066428-379.629445C117.279265 185.267839 133.463044 166.601555 150.785576 149.276523L150.785576 149.276523 150.785576 149.276523zM150.785576 149.276523"
    fill="#13227a" />
    <path d="M442.087359 761.221394c-9.966268 0-19.583786-3.836257-26.822549-10.77252L208.769432 552.689762c-15.468778-14.815027-16.000029-39.363822-1.186252-54.82885 14.813777-15.468778 39.365072-16.000029 54.8326-1.185002l176.297823 168.840309 319.783086-388.599462c13.607525-16.53503 38.04632-18.911285 54.58635-5.30001 16.54003 13.607525 18.912535 38.04632 5.30501 54.5851L472.033664 747.083868c-6.855013 8.336265-16.877531 13.431275-27.651301 14.073776-0.766251 0.0425-1.532503 0.065-2.300004 0.065L442.087359 761.222644zM442.087359 761.221394"
    fill="#13227a" />
</svg>
);

const CurrentStep = (props) => {
  let RenderSteps = null;
  if( props.currentPage === 1){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="error" title="Step 1" icon={processIcon()} />
          <Step title="Step 2" icon={waitingIcon()} />
          <Step title="Step 7" icon={waitingIcon()} />
        </Steps>
      </div>
    )
  }
  if( props.currentPage === 2){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="finish" title="Step 1" icon={completeIcon()} />
          <Step status="error" title="Step 2" icon={processIcon()} />
          <Step  title="Step 7" icon={waitingIcon()} />
        </Steps>
      </div>
    )
  }
  if( props.currentPage === 3){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="completed" title="Step 2" icon={completeIcon()} />
          <Step status="error" title="Step 3" icon={processIcon()} />
          <Step  title="Step 7" icon={waitingIcon()} />
        </Steps>
      </div>
    )
  }if( props.currentPage === 4){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="completed" title="Step 3" icon={completeIcon()} />
          <Step status="error" title="Step 4" icon={processIcon()} />
          <Step  title="Step 7" icon={waitingIcon()} />
        </Steps>
      </div>
    )
  }if( props.currentPage === 5){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="completed" title="Step 4" icon={completeIcon()} />
          <Step status="error" title="Step 5" icon={processIcon()} />
          <Step title="Step 7" icon={waitingIcon()} />
        </Steps>
      </div>
    )
  }if( props.currentPage === 6){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="completed" title="Step 5" icon={completeIcon()} />
          <Step status="error" title="Step 6" icon={processIcon()} />
          <Step title="Step 7" icon={waitingIcon()} />
        </Steps>
      </div>
    )
  }if( props.currentPage === 7){
    RenderSteps =(
      <div>
        <Steps direction="horizontal">
          <Step status="completed" title="Step 5" icon={completeIcon()} />
          <Step status="completed" title="Step 6" icon={completeIcon()} />
          <Step status="error" title="Step 7" icon={processIcon()} />
        </Steps>
      </div>
    )
  }

  return(
      <div style = {{margin: '2%'}}>
        <WingBlank mode={20} className="stepsExample">
          <WhiteSpace />
            {RenderSteps}
        </WingBlank>
      </div>
  )
}
export default CurrentStep;
