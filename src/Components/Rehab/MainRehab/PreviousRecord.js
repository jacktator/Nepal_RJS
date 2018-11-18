import React from 'react';
import {ActivityIndicator} from 'antd-mobile';
import ExerciseCard from '../../HOC/Exercises';

const display = (rehab) => {
  if(rehab.data){
    return(
      <div>
        {rehab.data.map((data, key) =>(
          <div key={key}>
            {data.name}
          </div>
          ))}
      </div>
    )
  }
}

const PreviousRecord = (props) => {

  if(props.isFetching){
    return(
      <div>
          <ActivityIndicator
            toast
            text="Please Wait..."
            animating={props.isFetching}
          />
      </div>
    )
  }
  else if(props.data){
    if(props.data.rehab){
      return(
              <div style={{height:'100%', overflow:'scroll', width:'90vw', marginLeft:'5vw'}}>
                  {props.data.rehab.map((rehab, key) => (
                      <div key={key}>
                          <h2>{rehab.rehab_category}</h2>
                          {display(rehab)}
                      </div>
                  ))}
              </div>
      )
    }
  }
    return (
      <div>No data found</div>
    )
}
export default PreviousRecord;
