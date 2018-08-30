import React from 'react'
import {Tabs} from 'antd-mobile'
import Content from './Content'

export default class StickyTab extends React.Component {
  constructor(props) {
    super(props);
    this.state={currentPage: this.props.currentpage}
  }
  componentDidUpdate(prevProps, prevState) {
    prevProps.currentpage !== this.props.currentpage ? this.setState({ currentPage: this.props.currentpage }) : null;
  }
  render() {

   return (
     <div className='plan-tabs'>
       <Tabs
         page={this.state.currentPage}
         tabs={[...Array(5)].map((v, k) => { return ({ title: <span style={(k) > this.props.currentpage ? ({textDecoration: 'line-through'}) : null}>{'WEEK ' + (k + 1)}</span> })})}
         renderTabBar={
           props => <Tabs.DefaultTabBar {...props} page={3} />
         }
         swipeable = {false}
         onTabClick={(tab,index) => {console.log(index), index <= this.props.currentpage ? this.setState({currentPage: index}) : null}}
       >
          <div className='content'>
             <Content selectedWeek={this.state.currentPage+1} planReducers={this.props.planReducers}/>
         </div>
        </Tabs>
     </div>
   );
  }
}
