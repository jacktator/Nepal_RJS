import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HOCInputFile from '../../HOC/inputFiles';
import styles from '../styles';

class Retrieve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { email } = this.state;
    return (
      <div className={classes.container}>
        <Grid container className={classes.gridRoot} spacing={0} justify="space-between" alignItems="stretch" direction="column">
          <Grid container className={classes.autoFlex}>
            <Paper className={classes.paper}>
              <Grid container className={classes.gridRoot} direction="column">

                <Grid container style={{ height: '33vh' }} justify="center" alignItems="flex-end">
                  <Typography variant="h2" component="h3" align="center" color="secondary" gutterBottom>Nepal</Typography>
                </Grid>

                <Grid container className={classes.autoFlex} direction="column" justify="space-evenly">
                  <Grid container alignContent="center">
                    <HOCInputFile
                      onChangeHandle={this.onChangeHandle}
                      value={email}
                      type="email"
                      fullwidth
                    />
                  </Grid>

                  <Grid item>
                    <Typography style={{ width: '80%', marginLeft: '10%' }} align="center" variant="body1" component="h6" color="secondary">
                      Please enter your email for resetting password
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid container style={{ height: '10vh' }} justify="center">
            <Button disableTouchRipple className={classes.button} color="primary">Retrieve</Button>
          </Grid>

        </Grid>
      </div>
    );
  }
}

Retrieve.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Retrieve);
