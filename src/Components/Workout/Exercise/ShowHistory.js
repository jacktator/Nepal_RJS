import React  from 'react';
import {Button} from 'antd-mobile';
import'./Exercise.css';
const ShowHistory = (props) => {
  return (
    <div>
      <div className="show-history-title">{props.name}</div>
          {props.record.daily_record.map((dailyData, key1) => (
            <div key={key1}>
              {dailyData.data.map((data, key2) => (
                <div key={key2}>
                  <div>
                  { props.name === data.name && (
                    <div>
                    <div className="exercise-day">{dailyData.date}</div>
                    {data.data.map((record, key3) => (
                      <div key={key3} className="exercise-history-detail">
                          <div >
                              <span>sets:  {key3+1} </span>
                              <span>{data.heading}:  {record.reps} </span>
                              {props.exercisePlace==="gym" && (
                                <span>weight:  {record.weight} </span>
                              )}
                          </div>
                      </div>
                    ))}
                    </div>
                  )}
                  </div>
                </div>
              ))}
            </div>
          ))}
      <Button style={{margin: '5vh 5vw 5vw',color:"white",
      backgroundColor:"#1F90E6"
    }}onClick={(e) => props.onBackButtonClicked(e) }>
        Return
      </Button>
    </div>
)
}

export default ShowHistory;
