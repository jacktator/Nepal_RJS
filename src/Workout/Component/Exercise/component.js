import React from 'react';
import PropTypes from 'prop-types';
import ExerciseStructure from '../../../HOC/ExerciseStructure';

class ExerciseComponent extends React.PureComponent {
  render() {
    return (
      <div style={{
        flex: 1, overflowY: 'scroll', whiteSpace: 'nowrap', width: '96vw', marginTop: '5vmin', overflowX: 'hidden',
      }}
      >
        <ExerciseStructure {...this.props} />
      </div>
    );
  }
}

ExerciseComponent.propTypes = {
  select: PropTypes.array,
};

export default ExerciseComponent;
