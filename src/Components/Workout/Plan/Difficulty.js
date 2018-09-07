import React from 'react';
import { Button,Flex,Checkbox} from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem;

const DifficultyArray = [
    {value:0, difficulty:'Too hard'},
    {value:1, difficulty:'Just right'},
    {value:2, difficulty:'Too easy'},
    {value:3, difficulty:'Do not complete'},
]

const Difficulty =() =>{
    return(
        <div className='listHeader'>How difficult do you think of the exercise?
            {DifficultyArray.map((i, key) => (
                <Flex key={key}>
                    <Flex.Item>
                        <CheckboxItem key={key} >
                            {i.difficulty}
                        </CheckboxItem>
                    </Flex.Item>
                </Flex>
            ))}
        </div>
    )
}
    
export default Difficulty;