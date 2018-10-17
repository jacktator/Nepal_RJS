import React from 'react';
import { Button,Flex,Checkbox} from 'antd-mobile'
import {postureCorrectionArray, injuryManagementArray} from '../../DataSources/AllArrays';
const CheckboxItem = Checkbox.CheckboxItem;

const Feedback =(props) => {
    return(
        <div className='listHeader'>
        

            <Button type="primary" onClick={(e) => props.onSubmitFeedbackHandler(e) }>
              Submit
            </Button>
        </div>
    )
}

export default Feedback;
