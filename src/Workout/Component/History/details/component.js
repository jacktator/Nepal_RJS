import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const component = props => (
  props.render.length === 0 ? <ListItem>sdasdasdsad</ListItem> : (props.render.map((v, k) => (
    <React.Fragment key={`${v.name}${k}`}>
      <ListItem>
        <ListItemText
          primary={(
            <Typography variant="body1">{v.name}</Typography>
              )}
        />
      </ListItem>
      <List>
        {props.data.length !== 0 && props.data[props.dayInWeek] && props.data[props.dayInWeek][props.week].acf[`exe_${k + 1}`].split(';').map((vv, kk) => {
          const m = vv.substring(1, vv.length - 1).split(',');
          return (
            m.length === 1
              ? (
                <ListItem key={`${kk}${m[0]}`}>
                  <ListItemText
                    primary={<Typography variant="body2">{`reps: ${m[0]}`}</Typography>}
                  />

                </ListItem>
              )
              : (
                <ListItem key={`${kk}${m[0]}`}>
                  <ListItemText
                    primary={<Typography variant="body2">{`reps: ${m[0]}  sets: ${m[1]}`}</Typography>}
                  />

                </ListItem>
              )
          );
        })}
      </List>
    </React.Fragment>
  )))
);

export default component;
