import React from 'react';
import {Stepper, Button,Flex} from 'antd-mobile';

const displayButton = (props) => {
  if(props.state.inCurrentProgress){
    return(
      <div>
      { props.state.completedExercise === props.state.exerciseLength &&
        <Flex.Item>
        <Button type="primary"
        inline="true" size="large" disabled={props.state.isFinish}
        onClick={()=> props.onCompleteButtonHandler()}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Complete Workout
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        </Flex.Item>
      }
      { props.state.completedExercise !== props.state.exerciseLength &&
        <Flex.Item>
        <Button type="primary" inline="true" size="large" onClick={()=>
          {props.state.currentSets > props.state.sets
            ? props.onNextButtonHandler()
            : props.onSaveButtonClicked(props.code)}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.state.currentSets > props.state.exerciseData.sets?'Next':'SAVE'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            </Flex.Item>
          }
          </div>
        )
      }else{
        return(
          <div>
          <Flex.Item>
          <Button type="primary" inline="true" size="large" onClick={()=> props.onNextButtonHandler() }>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          View next
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
          </Flex.Item>
          </div>
        )
      }

    }
    const WeightAndRep = (props) =>{
      return(
        <div className="weight-and-rep">
        {/* Text for stepper*/}

        {(props.state.exercisePlace==="gym") &&
          <div>
            <Flex justify="center" className="stepper-text">
            <Flex.Item>Weight (kg)</Flex.Item>
            <Flex.Item>Reps</Flex.Item>
            </Flex>
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
            max={20}
            min={1}
            value={parseInt(props.state.reps, 10)}
            onChange={props.onChangeRep}
            /></Flex.Item>

          </Flex>
          </div>
        }

      {(props.state.exercisePlace==="home") &&
      <div>
        <Flex justify="center" className="stepper-text">
        <Flex.Item>Reps</Flex.Item>
        </Flex>
        <Flex justify="center" className="stepper">

        <Flex.Item><Stepper
        style={{ width: '30%', minWidth: '110px' }}
        showNumber
        max={20}
        min={1}
        value={parseInt(props.state.reps, 10)}
        onChange={props.onChangeRep}
        /></Flex.Item>

      </Flex>
      </div>

      }


        {/* code for save button*/}
        <Flex justify="center" className="save-button">
        {displayButton(props)}
        </Flex>
        </div>
      );
    }

    export default WeightAndRep;
    //props.onSaveButtonClicked({props.exerciseData.code, this.state.sets ,this.state.reps, this.state.weight)}
