import React from 'react'
import {Tabs} from 'antd-mobile'
import Content from './Content'

export default class StickyTab extends React.Component {

  render() {
    const tabs = [
     { title: 'WEEK 1',unlocked: true },
     { title: 'WEEK 2',unlocked: false },
     { title: 'WEEK 3',unlocked: false },
     { title: 'WEEK 4',unlocked: false },
     { title: 'WEEK 5',unlocked: false },
   ];

   return (
     <div className='plan-tabs'>
        <Tabs tabs={tabs} renderTabBar={
              props => <Tabs.DefaultTabBar {...props} page={4}/>
          }>
          <div className='content'>
             <Content/>
          </div>
        </Tabs>
     </div>
   );
  }
}
