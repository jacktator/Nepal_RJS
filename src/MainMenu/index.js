import React from 'react';
import MainComponent from '../Components/HOC';
import FitnessIcon from '@material-ui/icons/FitnessCenterOutlined';
import RehabIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import ProfileIcon from '@material-ui/icons/PermContactCalendarOutlined';
import QuestionIcon from '@material-ui/icons/HelpOutlineOutlined';
import FAQIcon from '@material-ui/icons/LibraryBooksOutlined';
import ContentIcon from '@material-ui/icons/ListAltOutlined';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      boxShadow:'unset',
      borderRadius:'0',
      borderWidth:'1px 1px 1px 1px',
      borderStyle:'solid',
      borderColor:'white',
      backgroundColor:'#489fce',
    },
    CardContent:{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        justifyContent: 'center',
    }
  };
  

class MainRehab extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value: 0,
      midPartTabsValue: new Date().getUTCDay()-1,  
    };
    this.midPartTabsValueHandleChange=this.midPartTabsValueHandleChange.bind(this);
    this.clickHandle=this.clickHandle.bind(this);
  }
  midPartTabsValueHandleChange (event, value)  {
    this.setState({ midPartTabsValue: value });
  };

  clickHandle (exid) {
    this.props.fetchRehabPreviousRecord(this.props.RehabReducersid,exid);
  }

  render() {
      const classes = this.props.classes;
    return (
      <MainComponent
        backgroundImage='image/mainmenu.png'
        title=' '
        FooterContent={1}
        midComponent={
          <div style={{height:'100%', width:'100%', display:'grid',gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr 1fr'}}>
          <Card className={classes.card}>
          <CardContent className={classes.CardContent} component={Link} to='/try/plan'>
              <FitnessIcon style={{fontSize:'50', color:'white'}} />
              <Typography style={{ marginTop:'10px'}} component='h6' variant='subtitle1'>
                  Workout
              </Typography>
          </CardContent></Card>
          <Card className={classes.card}>
          <CardContent className={classes.CardContent} component={Link} to='/rehab'>
              <RehabIcon style={{fontSize:'50', color:'white'}} />
              <Typography style={{marginTop:'10px'}} component='h6' variant='subtitle1'>
              Rehab and Posture
              </Typography>
          </CardContent></Card>
          <Card className={classes.card}><CardContent className={classes.CardContent} component={Link} to='/profile'>
              <ProfileIcon style={{fontSize:'50', color:'white'}} />
              <Typography style={{marginTop:'10px'}} component='h6' variant='subtitle1'>
                    Profile
              </Typography>
          </CardContent></Card>
          <Card className={classes.card}><CardContent className={classes.CardContent}>
              <ContentIcon style={{fontSize:'50', color:'white'}} />
              <Typography style={{marginTop:'10px'}} component='h6' variant='subtitle1'>
              Content
              </Typography>
          </CardContent></Card>
          <Card className={classes.card}><CardContent className={classes.CardContent}>
              <QuestionIcon style={{fontSize:'50', color:'white'}} />
              <Typography style={{marginTop:'10px'}} component='h6' variant='subtitle1'>
              Ask a Question
              </Typography>
          </CardContent></Card>
          <Card className={classes.card}><CardContent className={classes.CardContent}>
              <FAQIcon style={{fontSize:'50', color:'white'}} />
              <Typography style={{marginTop:'10px'}} component='h6' variant='subtitle1'>
              FAQ
              </Typography>
          </CardContent></Card>
          </div>
        }
      />
    )
  }
}

export default withStyles(styles)(MainRehab);