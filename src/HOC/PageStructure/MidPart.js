import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
    const { classes, theme } = this.props;

    return (
      <Tabs
        value={1}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        scrollButtons="auto"
        style={{
          width: '100%', height: '30px', minHeight: '30px', borderBottom: 'solid 1px gray', backgroundColor: theme.palette.primary.main,
        }}
      >
        {this.props.tapBarContent.map((v, k) => <Tab onClick={() => this.props.hasClick && this.props.onTagClick(k)} style={{ minHeight: '30px' }} classes={{ disabled: classes.disabled }} disabled={(k >= (this.props.currentProcess || 1))} disableRipple key={k} label={v} />)}
      </Tabs>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MidPartComponent);
