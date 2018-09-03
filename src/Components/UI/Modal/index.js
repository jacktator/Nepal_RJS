import React from 'react';
import './Modal.css';
import Hoc from '../../../HOC/Hoc';
import Backdrop from '../Backdrop/index';
const Modal = (props) => {
  const loadClass = props.modalFor;
  console.log(loadClass);
  return(
    <Hoc>
      <Backdrop/>
      <div className={loadClass}>
      <img src={require("../../../Assets/Modal/ic_cancel.png")} className="cancel-icon" alt="cancel"
      onClick={()=> alert("insert logic to remove modal window")}/>
        {props.children}
      </div>
    </Hoc>
  );
}

export default Modal;
