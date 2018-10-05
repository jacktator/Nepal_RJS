import React from 'react';
import { Carousel, Button,SegmentedControl, WingBlank,WhiteSpace} from 'antd-mobile';
import './SelectExercise.css';
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
        console.log(this.props.listExercise);
        console.log(this.props.exerciseList);
        let {listExercise, exerciseList, exerciseIndex} = this.props;
        // if(exerciseIndex != null){
        //   let code = exerciseList[exerciseIndex].code;
        //   let workout = exerciseList[exerciseIndex]. workout;
        //   let value = this.countInArray(exerciseList, code);
        //   console.log("value",value)
        //   if(value > 1){
        //     let newArray = [];
        //     for(let i=0; i<exerciseList.length; i++){
        //       console.log(exerciseList[i].workout);
        //       console.log(workout);
        //
        //       if(exerciseList[i].workout != workout && exerciseList[i].code === code){
        //         newArray.push({workout:exerciseList[i].workout})
        //       }
        //     }
        //   }
        // }


      const exercises = this.props.listExercise.exercises;
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
              <div className="excercise-header" style={{margin:"10px 0px 10px",backgroundColor:'white',color:'black', textAlign: "center"}}>{data.name}</div>
              <img
                key = { data.value }
                src={require(`../../../Assets/Workout/Images/${key}.jpeg`)}
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
