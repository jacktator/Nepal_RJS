import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { add, min } from '../../../HOC/numberSelect';
import { styles } from '../../styles';
import ExerciseStructure from '../../../HOC/ExerciseStructure';


class ExerciseComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      sets: 0,
    };
    this.weightAdd = this.weightAdd.bind(this);
    this.weightMin = this.weightMin.bind(this);
    this.setsAdd = this.setsAdd.bind(this);
    this.setsMin = this.setsMin.bind(this);
  }

  weightAdd() {
    this.setState(add('weight'));
  }

  weightMin() {
    this.setState(min('weight'));
  }

  setsAdd() {
    this.setState(add('sets'));
  }

  setsMin() {
    this.setState(min('sets'));
  }

  render() {
    const { classes } = this.props;
    const { weight, sets } = this.state;
    const select = [
      {
        label: 'weight',
        min: this.weightMin,
        add: this.weightAdd,
        value: weight,
      }, {
        label: 'sets',
        min: this.setsMin,
        add: this.setsAdd,
        value: sets,
      },
    ];
    const ExList = [
      {
        latest: true,
        content: '10 weight X 10 sets',
        status: 'Previous',
      },
    ];
    return (
      <div style={{
        flex: 1, overflowY: 'scroll', whiteSpace: 'nowrap', width: '96vw', marginTop: '5vmin', overflowX: 'hidden',
      }}
      >
        <ExerciseStructure select={select} ExList={ExList} />
      </div>
    );
  }
}

ExerciseComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExerciseComponent);
