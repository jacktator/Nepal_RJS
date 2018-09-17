import React ,{Component} from 'react';
import { Button,Flex,Checkbox} from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem;

class Difficulty extends Component{
    state = {
        value:null
    }
    handleChange=(val) => {
        this.setState({
            value:val
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.value)
    }
    render(){
        const DifficultyArray = [
            {value:1, difficulty:'Too hard'},
            {value:2, difficulty:'Just right'},
            {value:3, difficulty:'Too easy'},
            {value:4, difficulty:'Do not complete'},
        ]
        return(
            <div className='listHeader'>How difficult do you think of the exercise?
                {DifficultyArray.map((i, key) => (
                    <Flex key={key}>
                        <Flex.Item>
                            <CheckboxItem 
                                checked={this.state.value === i.difficulty} 
                                key={key} 
                                onChange={()=>this.handleChange(i.difficulty)}
                                value={this.state.value}>
                                {i.difficulty}
                            </CheckboxItem>
                        </Flex.Item>
                    </Flex>
                    
                ))}
                <Button onClick={this.handleSubmit}>Submit</Button>
            </div>
        )
    }
}

export default Difficulty;
