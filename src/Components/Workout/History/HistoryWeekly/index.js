import React ,{Component} from 'react'
import {Tabs} from 'antd-mobile'
import Content from './Content'
import Hoc from '../../../../HOC/Hoc';

class HistoryWeekly extends Component {
  
  state = {
    currentPage:this.props.currentPage
  }
  componentDidUpdate(prevProps) {
    if(prevProps.currentPage !== this.props.currentPage){
      this.setState({ 
        currentPage: this.props.currentPage 
      })
    } 
  }

  render(){
  //   const tabs = [
  //    { title: 'WEEK 1' },
  //    { title: 'WEEK 2' },
  //    { title: 'WEEK 3' },
  //    { title: 'WEEK 4' },
  //    { title: 'WEEK 5' },
  //  ];
  // onTabClick={(data,k) => this.props.onParticularWeekClickedHandler(data,k+1)}
  return (
      
     <Hoc>
       <div className='plan-tabs'>
         <Tabs
           page={this.state.currentPage}
           tabs={[...Array(5)].map((v, k) => ({ title: 'WEEK ' + (k+1) }))}
           renderTabBar={
             props => <Tabs.DefaultTabBar {...props} page={3} />
            }
           onTabClick={(tab,index) => {console.log(index+1) ||  this.setState({currentPage: index})}}
           swipeable={false}
         >
            <div className='content'>
             <Content
              selectedWeek={this.state.currentPage+1}
              data={this.props.data}
              daily_record={this.props.daily_record} 
              onParticularDayClicked={this.props.onParticularDayClicked}/>
            </div>
          </Tabs>
       </div>
      </Hoc>
   );
  }
}

export default HistoryWeekly;