import React from 'react';
import { TabBar } from 'antd-mobile';
import './Footer.css';
/*
icons taken from http://iconfont.cn/home/index?spm=a313x.7781069.1998910419.2
*/



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
                  <div
                  className="home-icon"
                  style={{
                  width: '20px',
                  height: '20px',
                  pointerEvents:'none'}}
                  />}
                selectedIcon={
                  <div
                  className="home-sel-icon"
                  style={{
                  width: '20px',
                  height: '20px',
                  pointerEvents:'none'}}
                  />}
                selected={props.selectedTab === 'historyTab'}
                onPress={() => props.selectFooter('historyTab') }
                data-seed="logId"
              >
              </TabBar.Item>

            <TabBar.Item
              icon={
                <div
                className="plan-icon"
                style={{
                width: '20px',
                height: '20px',
                pointerEvents:'none'}}
                />}
              selectedIcon={
                <div
                className="plan-sel-icon"
                style={{
                width: '20px',
                height: '20px',
                pointerEvents:'none'}}
                />}
              title="Plan"
              key="Plan"
              selected={props.selectedTab === 'planTab'}
              onPress={() => props.selectFooter('planTab') }
              data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                className="workout-icon"
                style={{
                width: '20px',
                height: '20px',
                pointerEvents:'none'}}
                />}
              selectedIcon={
                <div
                className="workout-sel-icon"
                style={{
                width: '20px',
                height: '20px',
                pointerEvents:'none'}}
                />}
              title="Workout"
              key="Workout"
              dot
              selected={props.selectedTab === 'workoutTab'}
              onPress={() => props.selectFooter('workoutTab') }
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                className="me-icon"
                style={{
                width: '20px',
                height: '20px',
                pointerEvents:'none'}}
                />}
              selectedIcon={
                <div
                className="me-sel-icon"
                style={{
                width: '20px',
                height: '20px',
                pointerEvents:'none'}}
                />}
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
