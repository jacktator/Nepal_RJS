import React from 'react';
import './Modal.css';
import Hoc from '../../../HOC/Hoc';
import Backdrop from '../Backdrop/index';
const Modal = (props) => (
  <Hoc>
    <Backdrop />
    <div className={props.modalFor === 'selectExercise' ? "modal-for-select-exercise" : "modal"}>
      {props.children}
    </div>
  </Hoc>
);

export default Modal;
