import React from 'react';
import {Progress} from 'antd-mobile';
import './RehabExercise.css'

const RehabProgress = (props) => {
  return(
    <div className="RehabProgress">
     <Progress percent={40} position="normal" unfilled={false} appearTransition />
    </div>
  )
}

export default RehabProgress;
