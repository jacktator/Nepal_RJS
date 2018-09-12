import React, {Component} from 'react'
import { List, Icon, Modal, Button } from 'antd-mobile'
import {Link} from 'react-router-dom'
const Item = List.Item
const prompt = Modal.prompt;
export default class Content extends Component {

  handleClick(e, k) {
    const { progress, days } = this.props.WorkoutReducers.program;
    if (!(this.props.selectedWeek < (progress / days))) {
      if (!(k < (progress % days))&& (progress % days !== 0)) {
        e.preventDefault();
      }
    }
  }

  render() {
    const { days, progress, program_name, ask_feedback } = this.props.WorkoutReducers.program;

    return(
      <div>
        <List>
              {
            [...Array(parseInt(days, 10))].map((v, k) => {
              const dayNumber = (this.props.selectedWeek - 1) * days + k + 1;
              { console.log(this.props.WorkoutReducers.program) }
              return (
                <Link key={k} to={'/workout/' + dayNumber} onClick={event => this.handleClick(event, k)}>
                  {(dayNumber == progress) && (ask_feedback) ? (
                    <Item
                      extra={
                        <Button
                        style={{height:'auto', width:'auto', borderRadius: '50%'}}
                        icon={<img src={require("../../../Assets/Exercise/exerciseInfo.svg")} style={{ backgroundColor: 'black', borderRadius: '50%', marginRight:'0' }} alt="info" />}
                        onClick={() => prompt(
                        'Password',
                        'You can custom buttons',
                        [
                          { text: 'a' },
                          { text: 'b', onPress: password => console.log(`密码为:${password}`) },
                        ],
                        'secure-text',
                      )}
                      />}
                      disabled={false}
                      onClick={(e) => { e.preventDefault() }}
                    >
                    <div style={{ fontSize: '16px'  }}> {'Day '+ dayNumber} {program_name} </div>
                    </Item>
                  ): (
                    <Item
                    arrow="horizontal"
                    disabled={(this.props.selectedWeek)<(progress/days) ? false : (progress%days === 0) ? false : (!(k < (progress % days)))}
                    style={{width:'100%'}}
                    // onClick={() => this.onChange(data.value)}
                    >
                    <div style={{ fontSize: '16px'  }}> {'Day '+ dayNumber} {program_name} </div>
                    </Item>
                  ) }
                  
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
// <Item
// arrow="horizontal"
// disabled={(this.props.selectedWeek)<(progress/days) ? false : (progress%days === 0) ? false : (!(k < (progress % days)))}
// style={{width:'100%'}}
// // onClick={() => this.onChange(data.value)}
// >
// <div style={{ fontSize: '16px'  }}> {'Day '+ dayNumber} {program_name} </div>
// </Item>