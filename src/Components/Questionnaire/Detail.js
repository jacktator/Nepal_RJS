import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const RadioItem = Radio.RadioItem;
// const CheckboxItem = Checkbox.CheckboxItem;

const Detail = (props) => {
  const gender = props.fields.gender;
  const exercisePlace = props.fields.exercisePlace;
  const weight = [];
  weight.push(parseInt(props.fields.weight,10));
  return(
    <div>
      <h2 style={{textAlign: 'center'}}>Your Detail</h2>
        <InputItem
          type="text"
          placeholder="Please enter your name"
          onChange={(v) => props.nameHandler(v)}
          value={props.name}
        >Name</InputItem>

        <InputItem
          type="number"
          placeholder="Please enter your age"
          onChange={(v) => props.ageHandler(v)}
          value={props.fields.age}
        >Age</InputItem>

        <List renderHeader={() => 'Please select your Gender'}>
          {props.genderArray.map((i,key) => (
            <RadioItem key={key} checked={gender === i.value} onChange={() => props.genderHandler(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
        <WhiteSpace size="lg" />
        <Picker
          data={props.weightArray}
          locale={enUs}
          cols={1}
          value={[weight[0]]}
          onOk={v => props.selectWeight(v)}
          >
          <List.Item arrow="horizontal">Current Body Weight:</List.Item>
        </Picker>

        <List renderHeader={() => 'Where do you want to exercise?'}>
          {props.exercisePlaceArray.map((i,key) => (
            <RadioItem key={key} checked={exercisePlace === i.value} onChange={() => props.selectExercisePlace(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>


    </div>
  )

}

export default Detail;
