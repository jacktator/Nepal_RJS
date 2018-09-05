import React, {Component} from 'react'
import { List, Flex } from 'antd-mobile'
import {Link} from 'react-router-dom'
const Item = List.Item

export default class Content extends Component {

  handleClick(e, k) {
    if (!(this.props.selectedWeek < (this.props.WorkoutReducers.program.progress / this.props.WorkoutReducers.program.days))) {
      if (!(k < (this.props.WorkoutReducers.program.progress % this.props.WorkoutReducers.program.days))) {
        if(this.props.WorkoutReducers.program.progress % this.props.WorkoutReducers.program.days === 0 ){return null}
        console.log(k != this.props.WorkoutReducers.program.days)
        e.preventDefault();
      }
    }
  }
  
  render() {
    const { days, progress, program_name } = this.props.WorkoutReducers.program;

    return(
      <div>
        <List>
              {
            [...Array(parseInt(days))].map((v, k) => {
              const dayNumber = (this.props.selectedWeek - 1) * days + k + 1;
              return (
                <Link key={k} to={'/workout/' + dayNumber} onClick={ event => this.handleClick(event, k) }>
                  <Item
                  arrow="horizontal"
                  disabled={(this.props.selectedWeek)<(progress/days) ? false : progress%days === 0 ? false : (!(k < (progress % days)))}
                  style={{width:'100%'}}
                  // onClick={() => this.onChange(data.value)}
                  >
                  <div style={{ fontSize: '16px'  }}> {'Day '+ dayNumber} {program_name} </div>
                  </Item>
                </Link>
                  )
                })
            }
      </List>
      </div>
    )
  }
}

// '/workout/' + dayNumber