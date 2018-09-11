import React ,{Component} from 'react'
import {Tabs} from 'antd-mobile'
import Content from './Content'
import Header from '../Header'
import Hoc from '../../../../HOC/Hoc';

export default class HistoryWeekly extends React.Component {

  render() {
    const tabs = [
     { title: 'WEEK 1' },
     { title: 'WEEK 2' },
     { title: 'WEEK 3' },
     { title: 'WEEK 4' },
     { title: 'WEEK 5' },
   ];

   return (
     <Hoc>
      <Header />
       <div className='plan-tabs'>
         <Tabs
           tabs={[...Array(5)].map((v, k) => ({ title: 'WEEK ' + (k + 1) }))}
           renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
           onChange={(data,k) => this.props.onParticularWeekClickedHandler((k+1),data)}
         >
            <div className='content'>
             <Content days={this.props.days} onParticularDayClicked={this.props.onParticularDayClicked}/>
            </div>
          </Tabs>
       </div>
      </Hoc>
   );
  }
}

// class HistoryWeekly extends Component {
//   state = {
//     currentPage: this.props.currentpage
//   }
//   componentDidUpdate(prevProps) {
//     prevProps.currentpage !== this.props.currentpage ? this.setState({currentPage: this.props.currentpage}):null;
//   }


//   render() {
    
//     let weekNum = parseInt((this.props.weekNum),10)
//     // console.log('this is from history container',this.props.record)
//     // let week =[];
//     // this.props.record.weekly_record.map((i,key) => {
//     //   console.log(key, "week:", i.week)
//     //   week.push(i.week)
//     // })
//     // console.log(week)
//     const tabs = [
//       { title: 'WEEK 1' },
//       { title: 'WEEK 2' },
//       { title: 'WEEK 3' },
//       { title: 'WEEK 4' },
//       { title: 'WEEK 5' },
//     ];
//    return (
//      <Hoc>
//       <Header />
//        <div className='plan-tabs'>
//           <Tabs 
//             page={this.state.currentPage}
//             tabs={tabs}
//             renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}/>}
//             swipeable={false}
//             onTabClick={(tab,index) => {console.log(index) , index <= this.props.currentpage ? this.setState({currentPage:index}):null}}
//           >
//             <div className='content'>
//                <Content 
//                selectedWeek = {this.state.currentPage + 1}
//                onParticularDayClicked={this.props.onParticularDayClicked}
//                record={this.props.record} 
//                WorkoutReducers={this.props.WorkoutReducers}/>
//             </div>
//           </Tabs>
//        </div>
//       </Hoc>
//    );
//   }
// }


// export default HistoryWeekly;
