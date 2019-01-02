import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import LoadingComponent from '../../../../HOC/Loading';
import MainComponent from '../../../../HOC/PageStructure';
import { styles } from '../../../styles';

class Details extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <LoadingComponent open={false} />
        <MainComponent
          top
          backgroundImage="image/sampleImage.jpeg"
          title="Workout"
          progress={1}
          currentWeek={1}
          tabsValue={0}
          currentPage={2}
          FooterContent={1}
          onTagClick={e => console.log(e.target)}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
              <Paper className={classes.midPaper} elevation={8}>
                <div>ssssssskjodjaosidjo</div>
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

export default connect(mapStateToProps, null)(withStyles(styles)(Details));
