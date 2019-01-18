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
    const {
      classes, injury, posture, injuryExes, postureExes,
      openDialog, renderExercise, keepFunc, keepExercise,
      pre, progress, ExList, injuryName, postureName,
    } = this.props;
    console.log(pre);
    return (
      <div className={classes.root}>
        {!(injuryExes instanceof Array) && (
        <List
          component="nav"
          disablePadding
        >
          <ListItem>
            <Typography variant="h6" color="primary">{injury || 'Injury'}</Typography>
          </ListItem>
          <ListItem>
            <Typography color="primary"> Mobility</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[0] || injuryExes.mobility[0]}
            funcs={() => openDialog(injuryExes.mobility, 0)}
            keepExercise={() => keepExercise(0)}
            pre={pre ? !renderExercise[0] : false}
            itemID={0}
            prefix="injury"
            injuryName={injuryName}
          />
          <ListItem>
            <Typography color="primary"> Mobility</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[1] || injuryExes.mobility[1]}
            funcs={() => openDialog(injuryExes.mobility, 1)}
            keepExercise={() => keepExercise(1)}
            pre={pre ? !renderExercise[1] : false}
            itemID={1}
            prefix="injury"
            injuryName={injuryName}


          />
          <ListItem>
            <Typography color="primary"> Release</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[2] || injuryExes.releaseWork[0]}
            funcs={() => openDialog(injuryExes.releaseWork, 2)}
            pre={pre ? !renderExercise[2] : false}
            itemID={2}
            keepExercise={() => keepExercise(2)}
            prefix="injury"
            injuryName={injuryName}


          />
          <ListItem>
            <Typography color="primary"> Strength</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[3] || injuryExes.strengthEndurance[0]}
            funcs={() => openDialog(injuryExes.strengthEndurance, 3)}
            pre={pre ? !renderExercise[3] : false}
            itemID={3}
            keepExercise={() => keepExercise(3)}
            prefix="injury"
            injuryName={injuryName}


          />
        </List>
        )}
        {
          !(postureExes instanceof Array) && (
            <List
              component="nav"
              disablePadding
            >
              <ListItem>
                <Typography variant="h6" color="primary">{posture || 'Posture'}</Typography>
              </ListItem>
              <ListItem>
                <Typography color="primary"> Mobility</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[4] || postureExes.mobility[0]}
                funcs={() => openDialog(postureExes.mobility, 4)}
                keepExercise={() => keepExercise(4)}
                pre={pre ? !renderExercise[4] : false}
                itemID={4}
                prefix="posture"
                postureName={postureName}


              />
              <ListItem>
                <Typography color="primary"> Mobility</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[5] || postureExes.mobility[1]}
                funcs={() => openDialog(postureExes.mobility, 5)}
                keepExercise={() => keepExercise(5)}
                pre={pre ? !renderExercise[5] : false}
                itemID={5}
                prefix="posture"
                postureName={postureName}


              />
              <ListItem>
                <Typography color="primary"> Release</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[6] || postureExes.releaseWork[0]}
                funcs={() => openDialog(postureExes.releaseWork, 6)}
                keepExercise={() => keepExercise(6)}
                pre={pre ? !renderExercise[6] : false}
                itemID={6}
                prefix="posture"
                postureName={postureName}


              />
              <ListItem>
                <Typography color="primary"> Strength</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[7] || postureExes.strengthEndurance[0]}
                funcs={() => openDialog(postureExes.strengthEndurance, 7)}
                keepExercise={() => keepExercise(7)}
                pre={pre ? !renderExercise[7] : false}
                itemID={7}
                prefix="posture"
                postureName={postureName}


              />
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
