import React from 'react';
import './Modal.css';
import Hoc from '../../../HOC/Hoc';
import Backdrop from '../Backdrop/index';
const Modal = (props) => (
  <Hoc>
    <div className="Modal">
      {props.children}
    </div>
    <Backdrop />
  </Hoc>
);

export default Modal;
