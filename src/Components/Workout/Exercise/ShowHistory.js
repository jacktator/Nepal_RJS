import React  from 'react';
import {Button} from 'antd-mobile';
const ShowHistory = (props) => {

  console.log("This is show history page", props);

  return (
    <div>
      This is for short history
          {props.record.daily_record.map((dailyData, key1) => (
            <div key={key1}>
            <div>day: {dailyData.day}</div>
              {dailyData.data.map((data, key2) => (
                <div key={key2}>
                  <div>
                  { props.code === data.code && (
                    <div>
                      <div> name: {data.name}</div>
                      <div> code: {data.code}</div>
                    {data.data.map((record, key3) => (
                      <div key={key3}>
                        <span>sets: {key3+1} </span>
                        <span>reps: {record.reps} </span>
                        <span>weight: {record.weight} </span>
                      </div>
                    ))}
                    </div>
                  )}
                  </div>
                </div>
              ))}
            </div>
          ))}
      <Button style={{margin: '0px 5vw 5vw'}}onClick={(e) => props.onBackButtonClicked(e) }>
        Return
      </Button>
    </div>
)
}


export default ShowHistory;
