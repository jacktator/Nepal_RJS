import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const styles = ({
  disabled: {
    textDecoration: 'line-through',
  },
});

class MidPartComponent extends React.PureComponent {
  render() {
    const {
      classes, theme, tapBarContent, onTagClick, currentWeek, tabsValue,
    } = this.props;
    return (
      <Tabs
        value={tabsValue || 0}
        indicatorColor="primary"
        textColor="secondary"
        scrollable
        onChange={onTagClick}
        scrollButtons="auto"
        style={{
          width: '100%', height: '30px', minHeight: '30px', backgroundColor: theme.palette.primary.main,
        }}
      >
        {tapBarContent.map((v, k) => (
          <Tab
            style={{ minHeight: '30px' }}
            classes={{ disabled: classes.disabled }}
            disabled={(k >= (currentWeek || 1))}
            disableRipple
            key={v}
            label={v}
          />
        ))}
      </Tabs>
    );
  }
}

MidPartComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  tapBarContent: PropTypes.array.isRequired,
  hasClick: PropTypes.bool,
  onTagClick: PropTypes.func,
  currentProcess: PropTypes.number,
};

export default withStyles(styles, { withTheme: true })(MidPartComponent);
