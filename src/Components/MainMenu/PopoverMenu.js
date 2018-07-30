import React from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

export default class PopoverMenu extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (<div className="main-menu-popovermenu">
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            placement='bottomLeft'
            overlay={[
              (<Item key="1" value="Workout" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Workout</Item>),
              (<Item key="2" value="Rehab and Posture" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>Rehab and Posture</Item>),
              (<Item key="3" value="My Profile" icon={myImg('uQIYTFeRrjPELImDRrPt')}>My Profile</Item>),
              (<Item key="4" value="Content" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Content</Item>),
              (<Item key="5" value="Ask a Question" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>Ask a Question</Item>),
              (<Item key="6" value="FAQ" icon={myImg('uQIYTFeRrjPELImDRrPt')}>FAQ</Item>),
              (<Item key="6" value="Logout" icon={myImg('uQIYTFeRrjPELImDRrPt')}>Logout</Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <img src={require('../../Assets/menu-icon.png')} height='100%' width='100%' alt="work" />
          </Popover>

    </div>
  );
  }
}
