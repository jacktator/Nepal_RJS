import React, {Component} from 'react';
import {Stepper, Button,Flex} from 'antd-mobile';
import MediaQuery from 'react-responsive';

export default class WeightAndRep extends Component{

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
            max={200}
            min={1}
            step={2.5}
            value={this.props.weight}
            onChange={(e) => this.props.onChangeWeight(e)}
          /></Flex.Item>
        <Flex.Item><Stepper
            style={{ width: '30%', minWidth: '110px' }}
            showNumber
            max={10}
            min={1}
            value={this.props.reps}
            onChange={this.props.onChangeRep}
          /></Flex.Item>
        </Flex>
        {/* code for save button*/}
        <Flex justify="center" className="save-button">
          <Flex.Item>
          <MediaQuery query="(min-height:668px)">
          <Button type="primary" inline="true" size="large" onClick={()=>this.props.onSaveButtonClicked()}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.props.steps <= 0 ? 'NEXT' : 'SAVE'}
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

//this.props.onSaveButtonClicked({this.props.exerciseData.code, this.state.sets ,this.state.reps, this.state.weight)}