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
      classes, injury, posture, injuryExes, postureExes, openDialog, renderExercise, keepFunc, keepExercise, pre, progress, ExList,
    } = this.props;
    console.log(pre);
    return (
      <div className={classes.root}>
        {Object.keys(injuryExes).length > 0 && (
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
            keepExercise={keepExercise}
            pre={pre}
            progress={progress}
            itemID={0}
            ExList={ExList}
          />
          <ListItem>
            <Typography color="primary"> Mobility</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[1] || injuryExes.mobility[1]}
            funcs={() => openDialog(injuryExes.mobility, 1)}
            keepExercise={keepExercise}
            pre={pre}
            progress={progress}
            itemID={1}
            ExList={ExList}

          />
          <ListItem>
            <Typography color="primary"> Release</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[2] || injuryExes.releaseWork[0]}
            funcs={() => openDialog(injuryExes.releaseWork, 2)}
            keepExercise={keepExercise}
            pre={pre}
            itemID={2}
            progress={progress}
            ExList={ExList}

          />
          <ListItem>
            <Typography color="primary"> Strength</Typography>
          </ListItem>
          <HOClistitem
            exeData={renderExercise[3] || injuryExes.strengthEndurance[0]}
            funcs={() => openDialog(injuryExes.strengthEndurance, 3)}
            keepExercise={keepExercise}
            pre={pre}
            itemID={3}
            progress={progress}
            ExList={ExList}

          />
        </List>
        )}
        {
          Object.keys(postureExes).length > 0 && (
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
                keepExercise={keepExercise}
                pre={pre}
                itemID={4}
                progress={progress}
                ExList={ExList}

              />
              <ListItem>
                <Typography color="primary"> Mobility</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[5] || postureExes.mobility[1]}
                funcs={() => openDialog(postureExes.mobility, 5)}
                keepExercise={keepExercise}
                pre={pre}
                itemID={5}
                progress={progress}
                ExList={ExList}

              />
              <ListItem>
                <Typography color="primary"> Release</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[6] || postureExes.releaseWork[0]}
                funcs={() => openDialog(postureExes.releaseWork, 6)}
                keepExercise={keepExercise}
                pre={pre}
                itemID={6}
                progress={progress}
                ExList={ExList}

              />
              <ListItem>
                <Typography color="primary"> Strength</Typography>
              </ListItem>
              <HOClistitem
                exeData={renderExercise[7] || postureExes.strengthEndurance[0]}
                funcs={() => openDialog(postureExes.strengthEndurance, 7)}
                keepExercise={keepExercise}
                pre={pre}
                itemID={7}
                progress={progress}
                ExList={ExList}

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
