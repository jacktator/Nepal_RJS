import React ,{Component} from 'react'
import {Tabs} from 'antd-mobile'
import Content from './Content'
import Header from '../Header'
import Hoc from '../../../../HOC/Hoc';

class HistoryWeekly extends Component {
  state = {
    currentPage: this.props.currentpage
  }
  componentDidUpdate(prevProps) {
    prevProps.currentpage !== this.props.currentpage ? this.setState({currentPage: this.props.currentpage}):null;
  }
  render() {
    
    let weekNum = parseInt(this.props.weekNum)
    // console.log('this is from history container',this.props.record)
    // let week =[];
    // this.props.record.weekly_record.map((i,key) => {
    //   console.log(key, "week:", i.week)
    //   week.push(i.week)
    // })
    // console.log(week)
  
   return (
     <Hoc>
      <Header />
       <div className='plan-tabs'>
          <Tabs 
            page={this.state.currentPage}
            tabs={[...Array(weekNum)].map((v,k)=>{return ({title:<span style={(k) > this.props.currentpage? ({textDecoration:'line-through'}):null}>{'WEEK'+(k+1)}</span>})})} 
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}/>}
            swipeable={false}
            onTabClick={(index)=>{console.log(index),index <= this.props.currentpage ? this.setState({currentPage:index}):null}}
          >
            <div className='content'>
               <Content 
               selectedWeek = {this.state.currentPage + 1}
               onParticularDayClicked={this.props.onParticularDayClicked}
               record={this.props.record} 
               WorkoutReducers={this.props.WorkoutReducers}/>
            </div>
          </Tabs>
       </div>
      </Hoc>
   );
  }
}


export default HistoryWeekly;
