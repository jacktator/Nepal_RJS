import React from 'react';
import { TabBar } from 'antd-mobile';
import './Footer.css';
import Yellow from '../../../Assets/yellow.png';

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

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    return (
      <div  className="container">
        <div className="footer-container">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="Home"
              key="Home"
              icon={{ uri: home }}
              selectedIcon={{ uri:homeSel}}

              selected={this.state.selectedTab === 'homeTab'}

              onPress={() => {
                this.setState({
                  selectedTab: 'homeTab',
                });
              }}
              data-seed="logId"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: plan }}
              selectedIcon={{ uri:planSel}}
              title="Plan"
              key="Plan"
              selected={this.state.selectedTab === 'planTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'planTab',
                });
              }}
              data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
<<<<<<< HEAD
              icon={{ uri: workout }}
              selectedIcon={{ uri:workoutSel}}

              title="Workout"
              key="Workout"
=======
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'src(../../../Assets/yellow.png) center center /  21px 21px no-repeat' }}
                />
              }
              title="Friend"
              key="Friend"
>>>>>>> db4344731de35eb5ea6e3fc7630ada8918ad1b70
              dot
              selected={this.state.selectedTab === 'workoutTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'workoutTab',
                });
              }}
            >
            </TabBar.Item>
            <TabBar.Item
<<<<<<< HEAD
              icon={{ uri: me }}
              selectedIcon={{ uri: meSel }}
              title="Me"
              key="me"
              selected={this.state.selectedTab === 'meTab'}
=======
              icon={{ uri: Yellow }}
              selectedIcon={{ uri: Yellow} }
              title="My"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
>>>>>>> db4344731de35eb5ea6e3fc7630ada8918ad1b70
              onPress={() => {
                this.setState({
                  selectedTab: 'meTab',
                });
              }}
            >
            </TabBar.Item>
          </TabBar>
          </div>
      </div>
    );
  }
}

export default Footer;
