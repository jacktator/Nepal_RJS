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

  getOptionIndex = () => {
    let index = document.getElementById("mySelect").selectedIndex;
    this.setState({currentChild:index})
  }

//This function
  selectExercise = () => {
    this.props.onSelect(this.props.listExercise.exercises[this.state.index].exercise[this.state.currentExercise])
  }

  render() {
    if(this.props.listExercise && this.props.listExercise !== null){
      const exercises = this.props.listExercise.exercises;
      console.log(exercises)
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
          { exercises[this.state.currentChild].exercise.map( (data, key) => (
            <div className="image-with-description" key={key}>
              <div className="excercise-header" style={{margin:"10px 0px 10px",backgroundColor:'white',color:'black', textAlign: "center"}}>{data.name}</div>
              <img
                key = { data.value }
                src={require(`../../../Assets/Workout/images/${key}.jpeg`)}
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
            <SegmentedControl className='selectItem' selectedIndex={this.state.currentChild} values={[exercises[0].name, exercises[1].name]} onChange={this.onChange} on/>
            <div className="select-option">
            <select id="mySelect"  onChange={this.getOptionIndex} >
              <option  value={exercises[0].name} >{exercises[0].name}</option>
              <option  value={exercises[1].name} >{exercises[1].name}</option>
            </select>
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
