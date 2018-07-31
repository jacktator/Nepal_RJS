import React from 'react';
import { List, InputItem, Radio, Picker, WhiteSpace,Flex} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import './Questionnaire.css';
const RadioItem = Radio.RadioItem;
// const CheckboxItem = Checkbox.CheckboxItem;

const Detail = (props) => {
  const gender = props.fields.gender;
  const weight = [];
  const age = [];
  age.push(parseInt(props.fields.age,10));
  weight.push(parseInt(props.fields.weight,10));
  document.body.style = 'background: white;';
  return(
    <div>
      <h2 style={{textAlign: 'center'}}>Your Details</h2>
      <Flex>
      <Flex.Item>
        <InputItem
          type="text"
          placeholder="Please enter your name"
          required
          onChange={(v) => props.nameHandler(v)}
          value={props.name}
        >Name</InputItem>
        </Flex.Item>
        </Flex>
        <Flex>
        <Flex.Item>
        <div className="age-picker-pull-right">
          <Picker

            data={props.ageArray}
            locale={enUs}
            cols={1}
            extra=" "
            title={<div>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
            value={[age[0]]}
            onOk={v => props.selectAge(v)}
            >
            <List.Item arrow="down">Age:</List.Item>
          </Picker>
        </div>
        </Flex.Item>
        </Flex>
        <div className="listHeader">Gender:</div>
          {props.genderArray.map((i,key) => (
            <Flex key={key}>
              <Flex.Item>
            <RadioItem key={key} checked={gender === i.value} onClick={() => props.genderHandler(i.value)}>
              {i.label}
            </RadioItem>
            </Flex.Item>
            </Flex>
          ))}

        <WhiteSpace size="lg" />
        <Picker
          data={props.weightArray}
          locale={enUs}
          cols={1}
          extra=" "
          title={<div>Weight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}

          value={[weight[0]]}
          onOk={v => props.selectWeight(v)}
          >
          <List.Item arrow="down">Current Body Weight:</List.Item>
        </Picker>

    </div>
  )

}

export default Detail;
