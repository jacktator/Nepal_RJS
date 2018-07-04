import React from 'react';
import Hoc from '../../../HOC/Hoc.js';
import { Button, WhiteSpace } from 'antd-mobile';


const RehabModal = (props) => (
  <Hoc>
    <img style={{ height:'200px', width:'250px', marginLeft: '20px'}} src={props.data.imgurl}  alt={props.data.description}/>
    <WhiteSpace/>
    <div style={{ textAlign: "center"}}> <strong> {props.data.description}</strong> </div>
    <WhiteSpace/><WhiteSpace/>
    <Button type="ghost"
      onClick={() => props.cancel()}
      inline size="medium" style={{ float: 'left', marginLeft: '2px'}}>

      Go Back
    </Button>
    <Button type="ghost"
      onClick={() => props.select(props.data.value, props.type)}
      inline size="medium" style={{ float: 'right', marginRight: '2px'}}>
      Select
    </Button>
  </Hoc>

);

export default RehabModal;
