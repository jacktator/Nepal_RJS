import React from 'react';
import { Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

const StepThree = (props) => {
  return(
    <div>
      <h2>Injury Management</h2>

      <CheckboxItem onChange={() => props.change(1)}>
        <label>
        <img style={{ height:"100px", width:"300px"}} src="http://livebiomechanix.com/wp-content/uploads/2015/12/Screen-shot-2015-11-30-at-7.49.40-PM-596x191.png"  alt="Posture Correction"/>
        </label>
      </CheckboxItem>

      <CheckboxItem onChange={() => props.change(2)}>
        <label>
        <img style={{ height:"100px", width:"100px"}} src="http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png"  alt="Lower Back Pain"/>
        </label>
      </CheckboxItem>

      <CheckboxItem onChange={() => props.change(3)}>
        <label>
        <img style={{ height:"100px", width:"100px"}} src="https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp" alt="Neck Pain"/>
        </label>
      </CheckboxItem>

      <CheckboxItem onChange={() => props.change}>
        <label>
        <img style={{ height:"100px", width:"100px"}} src="https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg" alt="Shoulder Pain"/>
        </label>
      </CheckboxItem>

      <CheckboxItem onChange={() => props.change}>
        <label>
        <img style={{ height:"100px", width:"100px"}} src="https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c" alt="Hip Pain"/>
        </label>
      </CheckboxItem>
    </div>
  )
}

export default StepThree;
