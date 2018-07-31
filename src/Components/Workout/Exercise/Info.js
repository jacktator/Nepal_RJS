 import React  from 'react';
import {Button} from 'antd-mobile';

 const Info = (props) => {
   return (
     <div>
      This is the info page
      Please insert all the info in the info page of the exercise Component
      thanks NEPAL_RJS Team....
     <Button onClick={(e) => props.onBackButtonClicked(e) }>
          Go back
        </Button>
     </div>
   )
 }

export default Info;
