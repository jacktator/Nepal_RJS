import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const RadioItem = Radio.RadioItem;
// const CheckboxItem = Checkbox.CheckboxItem;

const StepOne = (props) => {
  const gender = props.detail.gender;
  return(
    <div>
      <h2>Your Detail</h2>
        <InputItem
          type="text"
          placeholder="Please enter your name (letters only)"
          onChange={props.change.bind(this, 'one', 'name')}
          value={props.detail.name}
        >Name</InputItem>

        <InputItem
          type="number"
          placeholder="Please enter your age (numbers only)"
          onChange={props.change.bind(this, 'one', 'age')}
          value={props.detail.age}
        >Age</InputItem>

        <List renderHeader={() => 'Please select your gender Gender'}>
          {props.radioData.map((i,key) => (
            <RadioItem key={key} checked={gender === i.value} onChange={() => props.radioHandler(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
        <WhiteSpace size="lg" />
        <Picker
          data={props.weightArray}
          locale={enUs}
          cols={1}
          value={[props.detail.currentBodyWeight]}
          onOk={v => props.selectWeight(v)}
          >
          <List.Item arrow="horizontal">Current Body Weight:</List.Item>
        </Picker>

    </div>
  )
}

export default StepOne;
