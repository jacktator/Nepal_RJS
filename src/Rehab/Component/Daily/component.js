import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import HOClistitem from '../HOC/listitem';
import { styles } from '../../styles';

class SimpleList extends React.PureComponent {
  render() {
    const { classes, injury, posture } = this.props;
    return (
      <div className={classes.root}>
        {injury && (
        <List
          component="nav"
          disablePadding
        >
          <ListItem>
            <Typography variant="h6" color="primary">{injury || 'Injury'}</Typography>
          </ListItem>
          <ListItem>
            <Typography color="primary">Mobility</Typography>
          </ListItem>
          <HOClistitem />
          <ListItem>
            <Typography color="primary">Mobility</Typography>
          </ListItem>
          <HOClistitem />
          <ListItem>
            <Typography color="primary">Release</Typography>
          </ListItem>
          <HOClistitem />
          <ListItem>
            <Typography color="primary">Strength</Typography>
          </ListItem>
          <HOClistitem />
        </List>
        )}
        {
          posture && (
            <List
              component="nav"
              disablePadding
            >
              <ListItem>
                <Typography variant="h6" color="primary">{posture || 'Posture'}</Typography>
              </ListItem>
              <ListItem>
                <Typography color="primary">Mobility</Typography>
              </ListItem>
              <HOClistitem />
              <ListItem>
                <Typography color="primary">Mobility</Typography>
              </ListItem>
              <HOClistitem />
              <ListItem>
                <Typography color="primary">Release</Typography>
              </ListItem>
              <HOClistitem />
              <ListItem>
                <Typography color="primary">Strength</Typography>
              </ListItem>
              <HOClistitem />
            </List>
          )
        }
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
