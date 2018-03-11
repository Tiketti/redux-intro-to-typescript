import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { counterAction } from '.';

export type StateProps = {
  count: number;
};

function mapStateToProps(state: StateProps) {
  return {
    count: state.count,
  };
}

export type DispatchProps = {
  increment: () => void;
  decrement: () => void;
};  

function mapDispatchToProps(dispatch: Dispatch<counterAction>) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
}

class Counter extends React.Component<StateProps & DispatchProps> {
  state = { count: 0 };

  increment = () => {
    this.props.increment();
  }
  
  decrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Counter);