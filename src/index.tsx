import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Counter, { StateProps } from './Counter';

export type counterAction = {
  type: 'INCREMENT' | 'DECREMENT',
};

const initialState: StateProps = {
  count: 0,
};

const reducer = (state = initialState, action: counterAction): StateProps => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
      
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <Counter  />
  </Provider>
);

render(<App />, document.getElementById('root'));