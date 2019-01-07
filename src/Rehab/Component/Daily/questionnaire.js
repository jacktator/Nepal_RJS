import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import { third, fourth } from '../../../Questionnaire/Component/contentData';

const questionnaire = (props) => {
  const {
    posture, injury, handleClickOpen, handleSelectChange,
  } = props;
  return (
        <>
          <FormControl required component="fieldset">
            <Typography variant="body1" component="h6" color="textPrimary">What is your current injury focus: </Typography>
            <FormGroup>
              {third.map(v => (
                <FormControlLabel
                  style={{ justifyContent: 'space-between' }}
                  labelPlacement="start"
                  key={v.title}
                  name="injury"
                  onClick={() => handleClickOpen({ discription: v.describe || '', title: v.title })}
                  control={
                    <Checkbox color="primary" checked={injury === `${v.id}`} onChange={handleSelectChange} value={`${v.id}`} />
              }
                  label={v.title}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl required component="fieldset">
            <Typography variant="body1" component="h6" color="textPrimary">What is your current posture correction focus: </Typography>
            <FormGroup>
              {fourth.map(v => (
                <FormControlLabel
                  style={{ justifyContent: 'space-between' }}
                  labelPlacement="start"
                  key={v.title}
                  name="posture"
                  onClick={() => handleClickOpen({ discription: v.describe || '', title: v.title })}
                  control={
                    <Checkbox color="primary" checked={posture === `${v.id}`} onChange={handleSelectChange} value={`${v.id}`} />
              }
                  label={v.title}
                />
              ))}
            </FormGroup>
          </FormControl>
</>
  );
};

export default questionnaire;
