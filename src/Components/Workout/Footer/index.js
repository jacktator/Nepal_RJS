import React from 'react';
import { Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.css';
/*
icons taken from http://iconfont.cn/home/index?spm=a313x.7781069.1998910419.2
*/

const tabsObject = {
  history: 0,
  plan: 1,
  workout: 2,
  profile: 3,
};

const contentOfTabs = (props) => [


  { title: selectedDiv('history', props.currentPage), value: 'history' },
  { title: selectedDiv('plan', props.currentPage), value: 'plan' },
  { title: workoutDiv('workout', props.currentDay ,props.currentPage), value: 'workout' },
  { title: selectedDiv('profile', props.currentPage), value: 'profile' },
]

const Footer = (props) => {
  console.log("this is from footer", props);
  return(
  <div className='container'>
    <div className="footer-container">
      <Tabs
        page={tabsObject[props.currentPage]}
        style={{ height: '1000px'}}
        tabs={contentOfTabs(props)}
        swipeable={false}
        tabBarPosition="bottom"
        animated={false}
        onTabClick={tab => { props.selectFooter(tab.value) }}
      />
    </div>
  </div>
)
}

const selectedDiv = (title, currentPage) => title === currentPage ? (
  <Link to={'/'+title} style={{height:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
    <div className={title + '-sel-icon'} style={{ color: 'white', width: '26px', height: '26px', marginBottom:'-8px', marginTop:'15px' }}></div>
    {/*<span style={{color:'#33A3F4', marginTop:'0', marginBottom:'-10px'}}>{title}</span>*/}
  </Link>) : (
    <Link to={'/' + title} style={{height:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div className={title + '-icon'} style={{ width: '26px', height: '26px', marginBottom:'-8px', marginTop:'15px' }}></div>
      {/*}<span style={{color:'#949494', marginTop:'0', marginBottom:'-10px'}}>{title}</span>*/}
    </Link>
  )
  const workoutDiv = (title, currentDay, currentPage) => title === currentPage ? (
    <Link to={'/'+title+'/'+ currentDay} style={{height:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div className={title + '-sel-icon'} style={{ color: 'white', width: '26px', height: '26px', marginBottom:'-8px', marginTop:'15px' }}></div>
      {/*<span style={{color:'#33A3F4', marginTop:'0', marginBottom:'-10px'}}>{title}</span>*/}
    </Link>) : (
      <Link to={'/' + title+'/'+ currentDay} style={{height:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div className={title + '-icon'} style={{ width: '26px', height: '26px', marginBottom:'-8px', marginTop:'15px' }}></div>
       {/*<span style={{color:'#949494', marginTop:'0', marginBottom:'-10px'}}>{title}</span>*/}
      </Link>
    )
  // const Footer = (props) => {
  //   return (
  //     <div className="container">
  //       <div className="footer-container">
  //         <TabBar
  //           unselectedTintColor="#949494"
  //           tintColor="#33A3F4"
  //           barTintColor="white"
  //           hidden={props.hidden}
  //         >
  //             <TabBar.Item
  //               title="History"
  //               key="History"
  //               icon={
  //                 <div
  //                 className="home-icon"
  //                 style={{
  //                 width: '20px',
  //                 height: '20px',
  //                 pointerEvents:'none'}}
  //                 />}
  //               selectedIcon={
  //                 <div
  //                 className="home-sel-icon"
  //                 style={{
  //                 width: '20px',
  //                 height: '20px',
  //                 pointerEvents:'none'}}
  //                 />}
  //               selected={props.selectedTab === 'historyTab'}
  //               onPress={() => props.selectFooter('historyTab') }
  //               data-seed="logId"
  //           >
  //             </TabBar.Item>
  //           <Link to= '/plan'>
  //           <TabBar.Item
  //             icon={
  //               <div
  //               className="plan-icon"
  //               style={{
  //               width: '20px',
  //               height: '20px',
  //               pointerEvents:'none'}}
  //               />}
  //             selectedIcon={
  //               <div
  //               className="plan-sel-icon"
  //               style={{
  //               width: '20px',
  //               height: '20px',
  //               pointerEvents:'none'}}
  //               />}
  //             title="Plan"
  //             key="Plan"
  //             selected={props.selectedTab === 'planTab'}
  //             onPress={() => props.selectFooter('planTab') }
  //             data-seed="logId1"
  //           >
  //             </TabBar.Item>
  //           </Link>
  //           <Link to= '/workout'>
  //           <TabBar.Item
  //             icon={
  //               <div
  //               className="workout-icon"
  //               style={{
  //               width: '20px',
  //               height: '20px',
  //               pointerEvents:'none'}}
  //               />}
  //             selectedIcon={
  //               <div
  //               className="workout-sel-icon"
  //               style={{
  //               width: '20px',
  //               height: '20px',
  //               pointerEvents:'none'}}
  //               />}
  //             title="Workout"
  //             key="Workout"
  //             dot
  //             selected={props.selectedTab === 'workoutTab'}
  //             onPress={() => props.selectFooter('workoutTab') }
  //           >
  //             </TabBar.Item>
  //           </Link>
  //           <TabBar.Item
  //             icon={
  //               <div
  //               className="me-icon"
  //               style={{
  //               width: '20px',
  //               height: '20px',
  //               pointerEvents:'none'}}
  //               />}
  //             selectedIcon={
  //               <div
  //               className="me-sel-icon"
  //               style={{
  //               width: '20px',
  //               height: '20px',
  //               pointerEvents:'none'}}
  //               />}
  //             title="Me"
  //             key="me"
  //             selected={props.selectedTab === 'meTab'}
  //             onPress={() => props.selectFooter('meTab') }
  //           >
  //             </TabBar.Item>
  //         </TabBar>
  //         </div>
  //     </div>
  //   );
  // }
  function mapStateToProps(state){
    return {
      currentDay: state.WorkoutReducers.currentDay,
    }
  }

export default connect (mapStateToProps) (Footer);
