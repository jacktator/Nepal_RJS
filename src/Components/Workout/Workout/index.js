import React from 'react';
import {WingBlank, WhiteSpace, Button, Card} from 'antd-mobile';
import './Workout.css';
import { Link } from 'react-router-dom';

const Workout = (props) => {
    if(props.WorkoutReducers.dayIndex != null){
      let{dayIndex} = props.WorkoutReducers;
      return(
        <div className="container">
        <div className="workout-info">{props.WorkoutReducers.program.program_name} Workout</div>
          <div className="container-without-button">
            <div className= "image-container">
              <img className="image-source" src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="header"/>
            </div>

              {/* testing new UI format*/}
              <WingBlank size="lg">
                  {props.WorkoutReducers.program.exercises[dayIndex].exercise_list.map((data,key) => (
                    <div key={key}>
                    <WhiteSpace/>
                    <Card >
                      <Link to={`/exercise/${key}`} className="link-highlight">
                        <Card.Header
                          title={<span style={{whiteSpace:"nowrap"}}>{data.workout}</span>}
                          extra={<span>{data.code}</span>}
                        />
                      </Link>
                        <Card.Body style={{textAlign:"center"}}>
                          <img style={{borderStyle:"solid", borderColor:"#f5f5f9",borderWidth:"1px",borderRadius:"5px"}}src={require(`../../../Assets/Workout/Icons/${key}.jpg`)} height="120px" width="200px" alt="work" />
                        </Card.Body>

                        {props.showKeepOrChange &&

                          <Card.Footer
                            content={<div>
                                    {!data.is_saved && (
                                        <div style={{textAlign:"center"}}>
                                          <Button type="primary" size="omitted" inline onClick={() =>props.onWorkOutKeep(key)}>&nbsp;&nbsp;Keep&nbsp;&nbsp;</Button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                          <Button type="warning" size="omitted" inline onClick={() =>props.onExerciseChange(key)}>Change</Button>
                                          <WhiteSpace/>
                                        </div>
                                    )}
                                    {data.is_saved && (
                                        <div style={{textAlign:"center"}}>
                                          <Button type="primary" size="omitted" inline style={{ background: '#54D66A'}}>Saved!</Button>
                                          <WhiteSpace/>
                                        </div>
                                    )}
                                  </div>
                                  }/>
                                }
                    </Card>
                    <WhiteSpace/>
                    </div>
                  ))}
              </WingBlank>
              </div>


            <div className="footer-button">
            <WingBlank>
              <WingBlank>
                <Button type="primary" onClick={() => props.onStart()}>
                    Start your Workout
                </Button>
              </WingBlank>
            </WingBlank>
            </div>
        </div>//container
      )
    }else{
      return(
        <div> wait</div>
      )
    }
}

export default Workout;
