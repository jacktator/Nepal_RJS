import React ,{Component} from 'react';
import Hoc from '../../../../HOC/Hoc';
import { List,WhiteSpace,Flex,Button} from 'antd-mobile'
import Header from '../Header';
import FooterContainer from '../../../../Containers/Workout/FooterContainer/'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Item = List.Item;

class HistoryDetail extends Component {
  state ={
    currentDay: Number(this.props.match.params.day)
  }

  go =(currentDay)=>{
    this.setState({
      currentDay
    })
  }
  goPrev = () =>{
    let {currentDay} = this.state
    this.go(--currentDay)
  }
  goNext = () => {
    let {currentDay} = this.state
    this.go(++currentDay)
  }

  render(){
    let {program,history} = this.props.HistoryReducers
    const programID = parseInt((this.props.match.params.programID),10)
    const day = parseInt((this.props.match.params.day),10);
    let daysPerWeek = (parseInt((program.days),10))
    let totalDays = daysPerWeek*5

    let dayRecord = history.find((i) => programID === parseInt((i.program_id),10))
                      .daily_record.find((j) => parseInt(j.day,10) === day)
    // exercises list section
    let RenderPage = (dayRecord) ?
    (
    dayRecord.data.map((i,key)=> (
      <List key={key}>
          <WhiteSpace/>
          <Item >
            <span style={{color:'green', textAlign:'left',fontSize:'20px',fontStyle:'italic'}}>
              {i.name}
            </span>
          </Item>
      {i.data.map((j,key) => (
            <Item key={key}>
              Sets:{key+1} &nbsp;&nbsp;
              Reps:{j.reps} &nbsp;&nbsp;
              Weight:{j.weight} &nbsp;&nbsp;
            </Item>
      ))}
      </List>
    ))
    ):(
      <div style={{textAlign:'center'}}>No history on day {day} ! </div>
    )
    // button section
    let prevButton =  (this.state.currentDay === 1) ? (
      <Button type='primary' disabled >Prev</Button>
    ):
    ( (this.state.currentDay === daysPerWeek*1 +1||
      this.state.currentDay === daysPerWeek*2 +1 ||
      this.state.currentDay === daysPerWeek*3 +1 ||
      this.state.currentDay === daysPerWeek*4 +1) ?(
      <Link to={`/history/${programID}/${this.state.currentDay-1}`} onClick={this.goPrev} style={{margin:'auto'}}>
        <button className='customizedButton-Blue'>Last Week</button>
      </Link>
      ):(
      <Link to={`/history/${programID}/${this.state.currentDay-1}`} onClick={this.goPrev} style={{margin:'auto'}}>
        <button className='customizedButton-Blue'>Prev</button>
      </Link>
      )
    )
    let nextButton = (this.state.currentDay >= totalDays ) ? (
      <Button type='primary' disabled>No More</Button>
    ):
    ((this.state.currentDay === daysPerWeek*1 ||
    this.state.currentDay === daysPerWeek*2 ||
    this.state.currentDay === daysPerWeek*3 ||
    this.state.currentDay === daysPerWeek*4) ? (
      <Link to={`/history/${programID}/${this.state.currentDay+1}`} onClick={this.goNext} >
       <button className='customizedButton-Blue'>Next Week</button>
      </Link>
    ):(
      <Link to={`/history/${programID}/${this.state.currentDay+1}`} onClick={this.goNext}>
        <button className='customizedButton-Blue'>Next</button>
      </Link>
    )
    )
    return(
      <Hoc>
      <Header />
      <div className="history-detail-container">
        {RenderPage}
      </div>
      <FooterContainer/>
      <div className="day-button-container">
        <Flex>
          <Flex.Item>
          {prevButton}
          </Flex.Item>
          <span style={{width:'50%'}}></span>
          <Flex.Item>
          {nextButton}
          </Flex.Item>
        </Flex>
      </div>
    </Hoc>
    )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    HistoryReducers: state.HistoryReducers,
  }
}
export default connect(mapStateToProps)(HistoryDetail);
