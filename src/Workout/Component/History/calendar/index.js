import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import LoadingComponent from '../../../../HOC/Loading';
import MainComponent from '../../../../HOC/PageStructure';
import { styles } from '../../../styles';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 0,
      renderData: {},
    };
    this.onTabsClick = this.onTabsClick.bind(this);
  }

  componentDidMount() {
    const urlProgrammeID = this.props.match.params.programmeID;
    const a = [...this.props.historyProgrammeList].find((v, k) => v.id = urlProgrammeID);
    this.setState({ renderData: a });
  }

  onTabsClick(event, value) {
    console.log(value);
    this.setState({ tabs: value });
  }

  render() {
    const { classes } = this.props;
    const { tabs, renderData } = this.state;
    return (
      <div>
        <LoadingComponent open={false} />
        <MainComponent
          top
          backgroundImage="image/sampleImage.jpeg"
          title={renderData.program_name || 'history'}
          currentWeek={1}
          tabsValue={tabs}
          currentPage={1}
          FooterContent={1}
          onTagClick={this.onTabsClick}
          tapBarContent={tapBarContent}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
              <Paper className={classes.midPaper} elevation={8}>
                <div>sssssss</div>
              </Paper>
            </Grid>
            )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { programQuery, directToQuestionnaire } = state.Workout;
  return {
    programQuery, directToQuestionnaire,
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Calendar));
