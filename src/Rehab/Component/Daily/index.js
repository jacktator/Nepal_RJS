import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Component from './component';
import MainComponent from '../../../HOC/PageStructure';
import { styles } from '../../styles';

const tapBarContent = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

class MainRehab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      midPartTabsValue: 0,
      currentWeek: 0,
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ currentWeek: new Date().getUTCDay() - 1 });
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  render() {
    const { classes } = this.props;
    const { currentWeek, midPartTabsValue } = this.state;
    return (
      <MainComponent
        top
        backgroundImage="image/sampleImage.jpeg"
        title="Rehab"
        currentWeek={currentWeek}
        currentPage={1}
        FooterContent={3}
        onTagClick={this.midPartTabsValueHandleChange}
        tabsValue={midPartTabsValue}
        showBottomButton
        tapBarContent={tapBarContent}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>
              <Component />
            </Paper>
          </Grid>
          )}
      />
    );
  }
}

MainRehab.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default withStyles(styles)(MainRehab);
