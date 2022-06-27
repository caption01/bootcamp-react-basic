import { useReducer } from 'react';

import { counterReducer, initialCount, action } from './reducer';

import './Counter.css';

const Counter = (props) => {
  const [count, dispatch] = useReducer(counterReducer, initialCount);

  return (
    <div className="counter">
      <div className="counter__display">
        <p>Counter: {count}</p>
      </div>
      <div>
        <button onClick={() => dispatch({ type: action.increment })}>+</button>
        <button onClick={() => dispatch({ type: action.decrement })}>-</button>
        <button onClick={() => dispatch({ type: action.reset })}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
