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

class MidPartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { 
      classes, theme, tapBarContent, hasClick, onTagClick, currentProcess 
    } = this.props;
    return (
      <Tabs
        value={1}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        scrollButtons="auto"
        style={{
          width: '100%', height: '30px', minHeight: '30px', backgroundColor: theme.palette.primary.main,
        }}
      >
        {tapBarContent.map((v, k) => 
          <Tab
            onClick={() => hasClick && onTagClick(k)}
            style={{ minHeight: '30px' }}
            classes={{ disabled: classes.disabled }}
            disabled={(k >= (currentProcess || 1))}
            disableRipple
            key={k}
            label={v} 
          />
        )}
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
