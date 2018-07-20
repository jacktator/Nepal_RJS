import React from 'react';
import Hoc from '../../HOC/Hoc.js';
import { Button, WhiteSpace } from 'antd-mobile';

const ShowError = (props) => {
  return (
    <Hoc>
      <div className="show-error">
        <strong>{props.error}</strong>
      <WhiteSpace/>
      <Button type="warning"
        onClick={() => props.cancel()}
      >
        Got it
      </Button>
      </div>
    </Hoc>
  )
}
export default ShowError;
