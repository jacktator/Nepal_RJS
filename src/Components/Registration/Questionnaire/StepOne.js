import React from 'react';

const StepOne = (props) => {
  console.log("",props);
  return(
    <div>
      <input type="text" value={props.data.name} />
    </div>
  )
}

export default StepOne;
