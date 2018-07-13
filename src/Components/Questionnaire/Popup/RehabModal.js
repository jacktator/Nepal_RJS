import React from 'react';
import Hoc from '../../../HOC/Hoc.js';
import { Button, WhiteSpace } from 'antd-mobile';


  class RehabModal extends React.Component{
    render(){
      let selectButton = this.props.data.isChecked === true ? 'Unselect' : 'Select';
      return(
        <Hoc>
          <img style={{ height:'200px', width:'265px', marginLeft: '7%'}} src={this.props.data.imgurl}  alt={this.props.data.description}/>
          <WhiteSpace/>
          <div style={{ textAlign: "center"}}> <strong> {this.props.data.description}</strong> </div>
          <WhiteSpace/><WhiteSpace/>
          <Button type="ghost"
            onClick={() => this.props.cancel()}
            inline size="medium" style={{ float: 'left', marginLeft: '2px'}}>
            Go Back
          </Button>
          <Button type="ghost"
            onClick={() => this.props.select(this.props.data.value, this.props.type)}
            inline size="medium" style={{ float: 'right', marginRight: '2px'}}>
            {selectButton}
                </Button>
        </Hoc>
      )
    }
  }



export default RehabModal;
