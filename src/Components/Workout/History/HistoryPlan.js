import React, {Component} from 'react'

export default class HistoryPlan extends Component{
  render(){
    const tabs = [
     { title: 'WEEK 1' },
     { title: 'WEEK 2' },
     { title: 'WEEK 3' },
     { title: 'WEEK 4' },
     { title: 'WEEK 5' },
   ];

    return(
      <div className='plan-tabs'>
         <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4}/>}>
           <div className='content'>
              <Content/>
           </div>
         </Tabs>
      </div>
    )
  }
}
