import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const CounterButton = props => (
  <div>
    <button className="btn btn-primary" onClick={props.increment}>Increment</button>
  </div>
);

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CounterButton);

//export default connect(state => state.counter)(Counter)
