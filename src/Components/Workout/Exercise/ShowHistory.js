import React  from 'react';
import {Button} from 'antd-mobile';
const ShowHistory = (props) => {

    console.log("This is show history page", props);
  return (
    <div>
      This is for short history
       <Button style={{margin: '0px 5vw 5vw'}}onClick={(e) => props.onBackButtonClicked(e) }>
            Return
      </Button>
    </div>
  )
}

export default ShowHistory;
