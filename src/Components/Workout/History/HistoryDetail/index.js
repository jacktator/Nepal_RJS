import React, {Component} from 'react';
import Hoc from '../../../../HOC/Hoc';
import Header from '../Header';
import {List,Button} from 'antd-mobile'

const Item = List.Item

class HistoryDetail extends Component{
  state={
    currentDay: this.props.day,
    totalDays: this.props.totalDays
  }
  
  buttonHandler= (button) =>{
    let currentDay = this.state.currentDay
    let totalDays = this.state.totalDays
    if(button === 'prev'){
      if(currentDay > 1){
        currentDay -= 1;
        this.setState({
          currentDay
        })
      }
    }
    if(button === 'next'){
      if(currentDay < totalDays){
        currentDay += 1
        this.setState({
          currentDay
        })
      }
    }
  }
  render(){
    console.log(this.state.totalDays)
    return(
      <Hoc>
      <Header/>
      <div className="history-detail-container">
      {this.props.exerciseData.map((i,key) => (
        <List key={key}>
            <Item>
             <span style={{fontSize:"25px"}}>{i.name}</span>
             </Item>
          {i.data.map((j,key)=>(
            <List key={key}>
              <Item >
                    Sets: {key+1} &nbsp;&nbsp;
                    Reps: {j.reps} &nbsp;&nbsp;&nbsp;
                    Weight: {j.weight}
                </Item>
            </List>
          ))}
          </List>
      ))}
      
      </div>
      <div className="day-button-container">
        <Button 
          disabled={this.state.currentDay === 1 ? true: false} 
          onClick={() => this.buttonHandler('prev')}
          type='primary'
          style={{position:'absolute',left:'0',marginLeft:'10px',zIndex:'1000'}}
          inline
          size='small'
        >
          Prev
        </Button>
        <Button 
          type='primary'
          onClick={() => this.buttonHandler('next')}
          style={{position:'absolute',right:'0',marginRight:'10px',zIndex:'1000'}}
          inline
          size='small'
        >
          {this.state.currentDay === this.state.totalDays ? "No More":"Next"}
        </Button>
      </div>
    </Hoc>
    )
  }
    
    // let name = [];
    //try to fetching data

    // this.props.data.map((i,key) => {
    //   console.log(key,"day:",i.day)
    //   i.data.map((j,key) => {
    //     //  name.push(j.name);
    //     console.log(key,"code:",j.code)
    //     j.data.map((k,key)=>{
    //         console.log
    //         (
    //           key,
    //           "Sets:",k.sets,
    //           "Rpes:",k.reps,
    //           "Weight:",k.weight
    //         )
    //     })
    //   })
    // });
}


export default HistoryDetail;
