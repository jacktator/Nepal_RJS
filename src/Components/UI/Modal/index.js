import React from 'react';
import './Modal.css';
import Hoc from '../../../HOC/Hoc';
import Backdrop from '../Backdrop/index';
const Modal = (props) => {
  const loadClass = props.modalFor;
  console.log(loadClass);
  return(
    <Hoc>
      <Backdrop />
      <div className={loadClass}>
        {props.children}
      </div>
    </Hoc>
  );
}

export default Modal;
