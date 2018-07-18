import React from 'react';
import Hoc from '../../../HOC/Hoc.js';
import { Button, WhiteSpace } from 'antd-mobile';

import './RehabModal.css';

  class RehabModal extends React.Component{
    render(){
      let selectButton = this.props.data.isChecked === true ? 'Unselect' : 'Select';
      return(
        <Hoc>
          <div className="rehab-modal-image">
            <img src={this.props.data.imgurl}  alt={this.props.data.description}/>
          </div>
          <WhiteSpace/>
          <div style={{ textAlign: "center"}}> <strong> {this.props.data.description}</strong> </div>
          <WhiteSpace/><WhiteSpace/>
          <Button type="ghost" className="button-left"
            onClick={() => this.props.cancel()}
            inline size="small" >
            Go Back
          </Button>
          <Button type="ghost" className="button-right"
            onClick={() => this.props.select(this.props.data.value)}
            inline size="small">
            {selectButton}
                </Button>
        </Hoc>
      )
    }
  }



export default RehabModal;
