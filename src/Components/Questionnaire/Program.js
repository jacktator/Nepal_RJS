import React from 'react';
import { List, Checkbox, Modal, Picker, Radio,Flex} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import './Questionnaire.css';
const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

const showAlert = (data, props) => {
  alert(data.label, data.description, [
    { text: 'Go Back', style: 'default' },
    { text: 'Select', onPress: () => props.selectTrainingGoals(data.value) },
  ]);
}

const display = (data, key, props) => {
  if(data.used_for === props.exercise_place || data.used_for === 'both' ){
    return (
      <Flex key={key}>
        <Flex.Item>
          <div onClick= {() => showAlert(data, props)}>
            <CheckboxItem key={key} checked={props.fields.goals === data.value}>
              {data.label}
            </CheckboxItem>
          </div>
        </Flex.Item>
      </Flex>
    )
  }
}

const Program = (props) => {
  const days = [];
  days.push(parseInt(props.days,10));
  return(
    <div >
      <h2 style={{textAlign: 'center'}}>Create Your Program</h2>
      <div>
      <div className="listHeader">How many days per week would you like to exercise?</div>
        <div className="days-picker-pull-right">
          <Picker
            data={props.daysArray}
            locale={enUs}
            cols={1}
            title={<div>Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
            value={[days[0]]}
            onOk={v => props.selectDays(v)}
          >
            <List.Item arrow="down">Days:</List.Item>
          </Picker>
        </div>
    </div>
    <div className="listHeader">Where would you like to exercise? </div>

      {props.exercisePlaceArray.map((i,key) => (
        <Flex key={key}>
          <Flex.Item>
        <RadioItem key={key} checked={props.exercise_place === i.value} onClick={() => props.selectExercisePlace(i.value)}>
          {i.label}
        </RadioItem>
        </Flex.Item>
        </Flex>
      ))}
    <div>

    { props.exercise_place!== "" && (
      <div className="listHeader">
        What is your current training goal?
      </div>
    )}
    { props.exercise_place!== "" && (
      props.trainingGoalsArray.map((i,key) => (
          display(i, key, props)
      ))
    )}
    </div>
    </div>
  )
}

export default Program;
