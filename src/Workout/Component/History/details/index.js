import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { styles } from '../../../styles';
import MainComponent from '../../../../HOC/PageStructure';
import LoadingComponent from '../../../../HOC/Loading';
import { getExerciseHistory, finishHistoryQuery, dealStringToExerciseArray } from '../../../action';
import Component from './component';

class Details extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      render: [],
      renderData: {},
    };
    this.returnBack = this.returnBack.bind(this);
  }

  componentDidMount() {
    const { dayInWeek, programmeID, index } = this.props.match.params;
    console.log('dayInWeek', dayInWeek);
    console.log('programmeID', programmeID);
    console.log('index', index);
    console.log(this.props.specificProgrammeHistory);
    if (!this.props.specificProgrammeHistory[dayInWeek] && this.props.historyProgrammeList.length !== 0) {
      this.props.finishHistoryQuery(true);
      const a = this.props.specificProgrammeHistory;
      this.props.getExerciseHistory({ day: (dayInWeek * 1 + 1), programmeID, currentData: a });
    }
    if (this.props.historyProgrammeList[index] && this.props.historyProgrammeList[index][`day_${dayInWeek * 1 + 1}_exe`]) {
      const str = this.props.historyProgrammeList[index][`day_${dayInWeek * 1 + 1}_exe`];
      const m = this.props.historyProgrammeList.length !== 0 && dealStringToExerciseArray(str.substring(1, str.length - 1).split(';'));
      console.log('history----------------------------------------------m-------------------', m);
      this.setState({ render: m });
    }
  }

  returnBack() {
    window.location.href = `#/workout/history/${this.props.match.params.programmeID}`;
  }

  render() {
    const { classes, historyQuery, specificProgrammeHistory } = this.props;
    const {
      dayInWeek, week,
    } = this.props.match.params;
    const { render, renderData } = this.state;
    const c = this.props.specificProgrammeHistory[dayInWeek];
    console.log(c);
    // const acf = c[this.props.match.params.week] && c[this.props.match.params.week].acf;
    return (
      <>
        <LoadingComponent open={historyQuery} />
        <MainComponent
          currentPage={1}
          FooterContent={1}
          tapBarContent={false}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-between" alignItems="center">
              <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} onClick={this.returnBack} color="secondary" aria-label="Menu">
                    <LeftIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  {c && c[week] && (
                  <Typography variant="h6" color="secondary">
                    {new Date(c[week].date).toDateString()}
                  </Typography>

                  )}
                  <div style={{ height: '54px', minWidth: '54px' }} />
                </Toolbar>
              </AppBar>
              <Paper style={{ height: '90%', marginBottom: '2.5%' }} className={classes.midPaper} elevation={8}>
                <List className={classes.root} component="nav" disablePadding>
                  {
                   c && render.length > 0 ? (
                     <Component
                       render={render}
                       data={c}
                       week={week}
                       dayInWeek={dayInWeek}
                     />
                   )
                     : (
                       <ListItem>
                         <ListItemText primary={<Typography variant="body1">There is nothing</Typography>} />
                       </ListItem>
                     )
 }
                </List>
              </Paper>
            </Grid>
            )}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    historyProgrammeList, specificProgrammeHistory, historyQuery,
  } = state.Workout;
  return {
    historyProgrammeList, specificProgrammeHistory, historyQuery,
  };
}

export default connect(mapStateToProps, { getExerciseHistory, finishHistoryQuery })(withStyles(styles)(Details));
