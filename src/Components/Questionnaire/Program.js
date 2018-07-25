import React from 'react';
import { List, Checkbox, Modal, Picker, Radio} from 'antd-mobile';
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
  if(data.usedFor === props.exercisePlace || data.usedFor === 'both' ){
    return (
      <CheckboxItem key={key} checked={props.fields.goals === data.value} onChange={() => props.selectTrainingGoals(data.value)}>
        <div onClick= {() => showAlert(data, props)}>
          {data.label}
        </div>
      </CheckboxItem>
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
            value={[days[0]]}
            onOk={v => props.selectDays(v)}
          >
            <List.Item arrow="horizontal">Days:</List.Item>
          </Picker>
        </div>
    </div>
    <div className="listHeader">Where would you like to exercise? </div>
    <List>
      {props.exercisePlaceArray.map((i,key) => (
        <RadioItem key={key} checked={props.exercisePlace === i.value} onChange={() => props.selectExercisePlace(i.value)}>
          {i.label}
        </RadioItem>
      ))}
    </List>
    <div>

    { props.exercisePlace!== "" && (
      <div className="listHeader">
        What is your current training goal?
      </div>
    )}
    { props.exercisePlace!== "" && (
      props.trainingGoalsArray.map((i,key) => (
          display(i, key, props)
      ))
    )}
    </div>
    </div>
  )
}

export default Program;
