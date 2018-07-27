import React, {Component} from 'react';
import {Stepper, Button,Flex} from 'antd-mobile';
import MediaQuery from 'react-responsive';

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
      <div className="weight-and-rep">
        {/* Text for stepper*/}
        <Flex justify="center" className="stepper-text">
        <Flex.Item> WEIGHT(kg)</Flex.Item>
        <Flex.Item> REPS</Flex.Item>
        </Flex>
        {/* Code for stepper*/}
        <Flex justify="center" className="stepper">
        <Flex.Item><Stepper
            style={{ width: '30%', minWidth: '110px' }}
            showNumber
            max={10}
            min={1}
            value={this.state.weightValue}
            onChange={(e) => this.onChangeWeight(e)}
          /></Flex.Item>
        <Flex.Item><Stepper
            style={{ width: '30%', minWidth: '110px' }}
            showNumber
            max={10}
            min={1}
            value={this.state.repValue}
            onChange={this.onChangeRep}
          /></Flex.Item>
        </Flex>
        {/* code for save button*/}
        <Flex justify="center" className="save-button">
          <Flex.Item>
          <MediaQuery query="(min-height:668px)">
          <Button type="primary" inline="true" size="large" onClick={(e) => this.props.onSaveButtonClicked(e)}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              SAVE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
          </MediaQuery>
          <MediaQuery query="(max-height:667px)">
          <Button type="primary" inline="true" size="small" onClick={(e) => this.props.onSaveButtonClicked(e)}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              SAVE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
          </MediaQuery>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
