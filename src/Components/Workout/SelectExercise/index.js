import React from 'react';
import { Carousel, Button,SegmentedControl, WingBlank,WhiteSpace} from 'antd-mobile';
import './SelectExercise.css';
import _ from 'lodash';
import Loading from '../../Loading';

  class SelectExercise extends React.Component {
    state = {
    imgHeight: 500,
    currentExercise: 0,
    index: 0,
    currentChild:0,
  }

  onChange = (e) => {
    this.setState({index:e})
  }

//This function calls the function onSelect from workoutconainter
  selectExercise = () => {
    this.props.onSelect(this.props.listExercise.exercises[this.state.index].exercise[this.state.currentExercise])
  }

  countInArray = (array, value) => {
    return array.reduce((n, x) => n + (x.code === value), 0);
  }
  render() {
    if(this.props.listExercise && this.props.listExercise !== null){
        const exercises = this.props.listExercise.exercises;
        const exerciseOption = exercises[this.state.index].exercise;
        let {listExercise, programExerciseList, exerciseIndex} = this.props;
        if(exerciseIndex != null){
          let exerciseOption = exercises[this.state.index].exercise;
          let code = programExerciseList[exerciseIndex].code;
          let workout = programExerciseList[exerciseIndex]. workout;
          let value = this.countInArray(programExerciseList, code);
          if(value > 1){
            let workoutUnderSameCode = [];
            for(let i=0; i<programExerciseList.length; i++){
              if(programExerciseList[i].workout != workout && programExerciseList[i].code === code){
                workoutUnderSameCode.push({"name":programExerciseList[i].workout})
              }
            }
            _.pullAllBy(exerciseOption, workoutUnderSameCode, 'name')
          }
        }
      return (
        <div className="container">
          <img src={require("../../../Assets/Modal/ic_cancel.png")} className="cancel-icon" alt="cancel"
          onClick={() => this.props.cancel()}/>
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={1}
            autoplay={false}
            infinite
            afterChange={index => this.setState({currentExercise: index}) }
          >
          { exercises[this.state.index].exercise.map( (data, key) => (
            <div className="image-with-description" key={key}>
              <div className="excercise-header" style={{margin:"10px 0px 10px",backgroundColor:'white',color:'black', textAlign: "center"}}>{data.name} :{key}</div>
              <img
                key = { data.value }
                src={`https://nepal.sk8tech.io/wp-content/uploads/${data.image_link}`}

                alt={data.description}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto', description: data.description });
                }}
              />
            </div>
          ))}
          </Carousel>
          <WhiteSpace/>
          <div className="select-button">
            <WingBlank>
              <Button type="primary" onClick={() => this.selectExercise()}>Select</Button>
            </WingBlank>
            <WhiteSpace/>
          </div>
          <WhiteSpace/>
          {exercises.length > 1 &&
            <WingBlank>
            <SegmentedControl className='selectItem' selectedIndex={this.state.index} values={[exercises[0].name, exercises[1].name]} onChange={(e) => this.onChange(e.nativeEvent.selectedSegmentIndex)} on/>
            <div className="select-option">
           </div>
            </WingBlank>
          }
          <WhiteSpace/>
        </div>
      );
    }else{
      return(
        <div>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <Loading mode="selectExercise"/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        </div>
      )
    }
  }
  }//end class
export default SelectExercise;
