import React from 'react';
import { TabBar } from 'antd-mobile';
import './Footer.css';
import Yellow from '../../../Assets/yellow.png';

import {Link} from 'react-router-dom';
/*
icons taken from http://iconfont.cn/home/index?spm=a313x.7781069.1998910419.2
*/

import home from '../../../Assets/Footer/home.svg'
import homeSel from '../../../Assets/Footer/homeSel.svg'
import me from '../../../Assets/Footer/me.svg'
import meSel from '../../../Assets/Footer/meSel.svg'
import plan from '../../../Assets/Footer/plan.svg'
import planSel from '../../../Assets/Footer/planSel.svg'
import workout from '../../../Assets/Footer/workout.svg'
import workoutSel from '../../../Assets/Footer/workoutSel.svg'

  const Footer = (props) => {
    return (
      <div  className="container">
        <div className="footer-container">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={props.hidden}
          >
              <TabBar.Item
                title="Home"
                key="Home"
                icon={{ uri: home }}
                selectedIcon={{ uri:homeSel}}
                selected={props.selectedTab === 'homeTab'}
                onPress={() => props.selectFooter('homeTab') }
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
