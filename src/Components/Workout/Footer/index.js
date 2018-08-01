import React from 'react';
import { TabBar } from 'antd-mobile';
import './Footer.css';
/*
icons taken from http://iconfont.cn/home/index?spm=a313x.7781069.1998910419.2
*/

import homeSel from '../../../Assets/Footer/homeSel.svg'
import me from '../../../Assets/Footer/me.svg'
import meSel from '../../../Assets/Footer/meSel.svg'
import plan from '../../../Assets/Footer/plan.svg'
import planSel from '../../../Assets/Footer/planSel.svg'
import workout from '../../../Assets/Footer/workout.svg'
import workoutSel from '../../../Assets/Footer/workoutSel.svg'

  const Footer = (props) => {
    return (
      <div className="container">
        <div className="footer-container">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={props.hidden}
          >
              <TabBar.Item
                title="History"
                key="History"
                icon={
                  <div style={{
                  width: '20px',
                  height: '20px',
                  background: "url('https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg')  center center /  21px 21px no-repeat",
                  pointerEvents:'none'}}
                  />}
                selectedIcon={{ uri:homeSel}}
                selected={props.selectedTab === 'historyTab'}
                onPress={() => props.selectFooter('historyTab') }
                data-seed="logId"
              >
              </TabBar.Item>

            <TabBar.Item
              icon={{ uri: plan }}
              selectedIcon={{ uri:planSel}}
              title="Plan"
              key="Plan"
              selected={props.selectedTab === 'planTab'}
              onPress={() => props.selectFooter('planTab') }
              data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: workout }}
              selectedIcon={{ uri:workoutSel}}
              title="Workout"
              key="Workout"
              dot
              selected={props.selectedTab === 'workoutTab'}
              onPress={() => props.selectFooter('workoutTab') }
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: me }}
              selectedIcon={{ uri: meSel }}
              title="Me"
              key="me"
              selected={props.selectedTab === 'meTab'}
              onPress={() => props.selectFooter('meTab') }
            >
            </TabBar.Item>
          </TabBar>
          </div>
      </div>
    );
  }
export default Footer;
