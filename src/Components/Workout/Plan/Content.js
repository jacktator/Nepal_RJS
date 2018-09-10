import React, {Component} from 'react'
import { List, Flex } from 'antd-mobile'
import {Link} from 'react-router-dom'
const Item = List.Item

export default class Content extends Component {

  handleClick(e, k) {
    const { progress, days } = this.props.WorkoutReducers.program;
    if (!(this.props.selectedWeek < (progress / days))) {
      if (!(k < (progress % days))&& (progress % days != 0)) {
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
                  disabled={(this.props.selectedWeek)<(progress/days) ? false : (progress%days === 0) ? false : (!(k < (progress % days)))}
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