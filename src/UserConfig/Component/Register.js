import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from '../styles';
import HOCInputFile from '../../HOC/inputFiles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { email, password, rePassword } = this.state;
    return (
      <div className={classes.container}>
        <Grid className={classes.gridRoot} container spacing={0} justify="space-between" alignItems="stretch" direction="column">
          <Grid container className={classes.autoFlex}>
            <Paper className={classes.paper}>
              <Grid container className={classes.gridRoot} direction="column">
                <Grid container justify="center" alignItems="flex-end" style={{ height: '33vh' }}>
                  <Typography variant="h2" component="h3" align="center" color="secondary" gutterBottom>Nepal</Typography>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.autoFlex}>
                  <Grid container alignContent="center">
                    <HOCInputFile
                      onChangeHandle={this.onChangeHandle}
                      value={email}
                      type="email"
                      fullwidth
                    />
                    <HOCInputFile
                      onChangeHandle={this.onChangeHandle}
                      value={password}
                      type="password"
                      fullwidth
                    />
                    <HOCInputFile
                      onChangeHandle={this.onChangeHandle}
                      confirm={password}
                      value={rePassword}
                      type="rePassword"
                      fullwidth
                    />
                  </Grid>
                  <Grid item>
                    <Typography align="center" color="secondary" variant="body1" component="h6">By registering, you agree with our terms and conditions</Typography>
                  </Grid>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
          <Grid container style={{ height: '10vh' }} justify="center">
            <Button  className={classes.button} color="primary">Register</Button>
          </Grid>
        </Grid>

      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
