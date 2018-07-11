import React, {Component} from 'react';
import { List, Stepper, Button, WhiteSpace } from 'antd-mobile';

export default class WeightAndRep extends Component{
  constructor(props) {
    super(props);
    this.state = {
      weightValue: 3,
      repValue:5,
    };
    this.onChangeWeight=this.onChangeWeight.bind(this);
    this.onChangeRep=this.onChangeRep.bind(this);
  }

  onChangeWeight = (val) => {
    this.setState({ weightValue: val });
  }

  onChangeRep = (val) => {
    this.setState({ repValue: val });
  }

  render(){
    return(
      <div calssname="container">
        <span style={{marginLeft: '13%'}}>
          WEIGHT (kgs)
        </span>
        <span style={{float:'right', marginRight: '20%'}}>
          REPS
        </span>
        <WhiteSpace size='xs'/>
        <span style={{ marginLeft:'10%'}}>
        <Stepper
            style={{ width: '30%', minWidth: '110px' }}
            showNumber
            max={10}
            min={1}
            value={this.state.weightValue}
            onChange={(e) => this.onChangeWeight(e)}
          />
        </span>
        <span style={{float:"right", marginRight:'10%'}}>
        <Stepper
            style={{ width: '35%', minWidth: '110px' }}
            showNumber
            max={10}
            min={1}
            value={this.state.repValue}
            onChange={this.onChangeRep}
          />
        </span>
        <WhiteSpace size='xl'/>
        <span style={{marginLeft:"35%"}}>
          <Button type="primary" inline="true" size="large" onClick={(e) => this.props.onSaveButtonClicked(e)}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              save
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
        </span>
      </div>
    );
  }
}
