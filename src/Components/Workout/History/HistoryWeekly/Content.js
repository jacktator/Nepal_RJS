import React, {Component} from 'react'
import { List, Flex } from 'antd-mobile'
import { Link } from 'react-router-dom'; 
const Item = List.Item

export default class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      // WorkoutPlans:[
      //   {day:'Day 1'},
      //   {day:'Day 2'},
      //   {day:'Day 3'},
      //   {day:'Day 4'},
      // ],
      days:this.props.data.days,
    }
  }
  // onClick={(e,k) => this.props.onParticularDayClicked(e,k+1)}
  render(){
    let days = parseInt((this.state.days),10)
    return(
        <div>
           <List> 
              {[...Array(days)].map((v,k) => {
                const dayNumber = (this.props.selectedWeek-1) * days + k+1
                return(
                <Link key={k} to={`/history/${dayNumber}`}>
                <Flex >
                    <Flex.Item>
                        <div>
                        <Item
                          arrow="horizontal"
                          >
                          <div style={{fontSize:'16px'}}> { 'Day' +  dayNumber}</div>
                        </Item>
                        </div>
                    </Flex.Item>
                </Flex>
                </Link>
              )
            })}
           </List>
        </div>
    )
  }
}
