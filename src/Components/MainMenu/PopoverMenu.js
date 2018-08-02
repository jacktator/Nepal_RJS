import React from 'react';
import { Popover } from 'antd-mobile';
import cx from 'classnames';

const Item = Popover.Item;

export default class PopoverMenu extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    if(opt.key === "1") {
      this.props.popup.workout(opt.props.value)
    } else {
      alert("nothing at the moment!");
    }
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
            placement='bottomRight'
            overlay={[
              (<Item className="pop-over-text" key="1" value="Workout" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_workout.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>Workout</Item>),
              (<Item className="pop-over-text" key="2" value="Rehab and Posture" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_rehab.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>Rehab and Posture</Item>),
              (<Item className="pop-over-text" key="3" value="My Profile" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_profile.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>My Profile</Item>),
              (<Item className="pop-over-text" key="4" value="Content" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_content.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>Content</Item>),
              (<Item className="pop-over-text" key="5" value="Ask a Question" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_ask.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>Ask a Question</Item>),
              (<Item className="pop-over-text" key="6" value="FAQ" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_faq.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>FAQ</Item>),
              (<Item className="pop-over-text" key="7" value="Logout" icon={<img src={require('../../Assets/MainMenuIcons/PopupMenuIcons/_logout.svg')} className={cx("am-icon am-icon-xs","smallicon")} alt="no"/>}>Logout</Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <img src={require('../../Assets/MainMenuIcons/menu-icon_w.svg')} height='100%' width='100%' alt="work" />
          </Popover>

    </div>
  );
  }
}
