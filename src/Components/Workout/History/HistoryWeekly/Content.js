import React, {Component} from 'react'
import {List} from 'antd-mobile'

const Item = List.Item

export default class Content extends Component {

  render(){
    let {days,progress} = this.props.WorkoutReducers.program;
    let record = this.props.record;
    let currentWeek = this.props.WorkoutReducers.currentWeek;
    let currentDay = this.props.WorkoutReducers.currentDay;

    // let weekIndex = (record.weekly_record.findIndex(i => 
    //   {return i.week === week.toString()}))
    // console.log(weekIndex)
    
    // let dayIndex = (record.weekly_record[weekIndex].daily_record.findIndex(j => 
    //   {return j.day === day.toString()}))
    // console.log(dayIndex)
    // let dayNum = parseInt((record.weekly_record[weekIndex].daily_record[dayIndex].day))
    // console.log(typeof(dayNum),dayNum)
                
    let Renderpage = null
    if(record){
      if(record.weekly_record){
        let weekIndex = (record.weekly_record.findIndex(i => 
          {return i.week === currentWeek.toString()}))
          if(weekIndex >= 0){
            let dayIndex = (record.weekly_record[weekIndex].daily_record.findIndex(j => 
              {return j.day === currentDay.toString()}))
              if(dayIndex >= 0){
              let day = (record.weekly_record[weekIndex].daily_record[dayIndex].day)
              Renderpage = (
                <List>
                  {[...Array(day)].map((v,k) => {
                    const dayNumber = (this.props.selectedWeek -1 ) * day +(k+1);
                    return(
                    <Item 
                    key={k}
                    arrow="horizontal" 
                    onClick={(e)=>this.props.onParticularDayClicked(e)}
                    disabled={(this.props.selectedWeek)<(progress/days)?false : (progress % days === 0)? false : (!(k<(progress % days)))}
                    >
                      <div style={{fontSize:'16px'}}>
                          day: {dayNumber}
                      </div>
                    </Item>)
                  })}
                </List>
              )
            }
          }
      }
    }
    return(
      <div>
        {Renderpage}
      </div>
        
    )
  }
}
