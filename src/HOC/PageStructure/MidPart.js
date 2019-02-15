import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Paper } from '@material-ui/core';

class MidPartComponent extends React.PureComponent {
  render() {
    const {
      theme, tapBarContent, onTagClick, currentWeek, tabsValue,
    } = this.props;
    return (
      <Paper square style={{ minWidth: '100%', maxWidth: '100%' }}>
        <Tabs
          value={tabsValue || 0}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          onChange={onTagClick}
          scrollButtons="auto"
          style={{
            height: '36px', minHeight: '36px', backgroundColor: theme.midPartNavigator.backgroundColor,
          }}
        >
          {tapBarContent.map((v, k) => (
            <Tab
              style={{ minHeight: '30px' }}
              disabled={(k >= (currentWeek || 1))}
              disableRipple
              key={v}
              label={v}
            />
          ))}
        </Tabs>
      </Paper>
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

export default withStyles(null, { withTheme: true })(MidPartComponent);
