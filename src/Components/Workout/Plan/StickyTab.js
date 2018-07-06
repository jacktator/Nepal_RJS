import React from 'react'
import {Tabs} from 'antd-mobile'
//import './StickyTab.css'
import Content from './Content'

export default class StickyTab extends React.Component {

  render() {
    const tabs = [
     { title: 'WEEK 1' },
     { title: 'WEEK 2' },
     { title: 'WEEK 3' },
     { title: 'WEEK 4' },
     { title: 'WEEK 5' },
     { title: 'WEEK 6' },
     { title: 'WEEK 7' },
     { title: 'WEEK 8' },
   ];

   return (
     <div className='tabs'>
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4}/>}>
          <div className='content'>
             <Content/>
          </div>
        </Tabs>
     </div>
   );
  }
}
