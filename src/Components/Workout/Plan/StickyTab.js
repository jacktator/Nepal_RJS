import React from 'react'
import {Tabs} from 'antd-mobile'
<<<<<<< HEAD
//import './StickyTab.css'
=======
>>>>>>> e51e71ce65a235d69ce8c845e1841bd0821b773e
import Content from './Content'

export default class StickyTab extends React.Component {

  render() {
    const tabs = [
     { title: 'WEEK 1' },
     { title: 'WEEK 2' },
     { title: 'WEEK 3' },
     { title: 'WEEK 4' },
     { title: 'WEEK 5' },
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
