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

  function mapStateToProps(state){
    return {
      currentDay: state.WorkoutReducers.currentDay,
    }
  }

export default connect (mapStateToProps) (Footer);
