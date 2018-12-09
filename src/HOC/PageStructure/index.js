import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import Footer from './Footer';
import MidPart from './MidPart';

class index extends React.PureComponent {
  render() {
    const {
      classes, backgroundImage, tapBarContent, title, top, showBottomButton, midComponent,
    } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.containerGrid} direction="column" justify="space-between" alignContent="space-between">
          {top && (
          <Grid container className={classes.top} style={{ backgroundImage: `url("${backgroundImage}")` }}>
            <Grid container className={classes.topInline} justify="center" direction="column">
              <Typography variant="h5" color="secondary">{title}</Typography>
              <Typography variant="body2" color="secondary">You are currently at week 1</Typography>
              <Typography variant="body2" color="secondary">100% completed</Typography>
            </Grid>
          </Grid>
          )}
          <Grid container className={classes.mid} direction="column" justify="space-around" alignContent="space-around" alignItems="center">
            {!!tapBarContent && <MidPart tapBarContent={tapBarContent} />}
            {midComponent}
          </Grid>
          <Grid container>
            <Footer FooterContent={1} showBottomButton={showBottomButton} />
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(index);
