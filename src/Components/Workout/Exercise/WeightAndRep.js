import React, {Component} from 'react';
import {Stepper, Button,Flex} from 'antd-mobile';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

const WeightAndRep = (props) =>{

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
            value={props.state.weight}
            onChange={(e) => props.onChangeWeight(e)}
          /></Flex.Item>
        <Flex.Item><Stepper
            style={{ width: '30%', minWidth: '110px' }}
            showNumber
            max={10}
            min={1}
            value={props.state.reps}
            onChange={props.onChangeRep}
          /></Flex.Item>
        </Flex>
        {/* code for save button*/}
        <Flex justify="center" className="save-button">
          <Flex.Item>
          <MediaQuery query="(min-height:668px)">
          { props.state.currentSets <= props.state.sets &&
            <Button type="primary" inline="true" size="large" onClick={()=>props.onSaveButtonClicked(props.code)}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                SAVE
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
          }
          { props.state.currentSets > props.state.sets &&
            <Button type="primary" inline="true" size="large" onClick={()=> props.onNextButtonHandler() }>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Next
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
          }


          </MediaQuery>
          <MediaQuery query="(max-height:667px)">
          <Button type="primary" inline="true" size="small" onClick={(e) => props.onSaveButtonClicked(props.code)}>
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

export default WeightAndRep;
//props.onSaveButtonClicked({props.exerciseData.code, this.state.sets ,this.state.reps, this.state.weight)}
