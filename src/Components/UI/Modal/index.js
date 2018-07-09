import React from 'react';
import './Modal.css';
import Hoc from '../../../HOC/Hoc';
import Backdrop from '../Backdrop/index';
const Modal = (props) => (
  <Hoc>
    {props.modalFor === 'selectExercise' &&
      <div className="modal-for-select-exercise">
        {props.children}
      </div>
    }
    {props.modalFor === 'selectRehab' &&
    <div className="modal">
      {props.children}
    </div>
    }

    <Backdrop />
  </Hoc>
);

export default Modal;
