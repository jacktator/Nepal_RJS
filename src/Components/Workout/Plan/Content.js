import React, {Component} from 'react'
import {List,Flex} from 'antd-mobile'
const Item = List.Item

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      WorkoutPlans:[
      ]
    }
  }

  render() {
    const { days, progress, goal } = this.props.planReducers;

    return(
      <div>
        <List>
          <Flex direction='column' justify='between'>
              {
                [...Array(parseInt(days))].map((v, k) => {
                return (
                    <Item key={k}
                      arrow="horizontal"
                      disabled={(this.props.selectedWeek)<(progress/days) ? false : (!(k < (progress % days)))}
                      style={{width:'100%'}}
                    // onClick={() => this.onChange(data.value)}
                    >
                    <div style={{ fontSize: '16px'  }}> {'Day '+((this.props.selectedWeek - 1) * days + k + 1)} {goal} </div>
                    </Item>
                  )
                })
            }
        </Flex>
      </List>
      </div>
    )
  }
}
