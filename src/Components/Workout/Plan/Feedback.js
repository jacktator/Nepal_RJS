import React from 'react';
import { Button,Flex,Checkbox} from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem;

const FeedbackArray = [
    {value:0, Feedback:'Too hard'},
    {value:1, Feedback:'Just right'},
    {value:2, Feedback:'Too easy'},
    {value:3, Feedback:'Do not complete'},
]

const Feedback =(props) => {
    return(
        <div className='listHeader'>How difficult do you think of the exercise?
            {FeedbackArray.map((i, key) => (
                <Flex key={key}>
                    <Flex.Item>
                    <div onClick={(e) => props.onFeedbackChange(e, i.value)}>
                        <CheckboxItem
                          checked={i.value === props.feedbackValue}
                          >
                            {i.Feedback}
                        </CheckboxItem>
                      </div>
                    </Flex.Item>
                </Flex>
            ))}
            <Button type="primary" onClick={(e) => props.onSubmitFeedbackHandler(e) }>
              Submit
            </Button>
        </div>
    )
}

export default Feedback;
