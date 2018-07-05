import React, {Component} from 'react';
import { List, Stepper } from 'antd-mobile';

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
      <List>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100%', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              value={this.state.weightValue}
              onChange={this.onChangeWeight}
            />
          }
        >
        WEIGHT(KG)
        </List.Item>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100%', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              value={this.state.repValue}
              onChange={this.onChangeRep}
            />
          }
        >
        REPS
        </List.Item>
      </List>
    );
  }
}
