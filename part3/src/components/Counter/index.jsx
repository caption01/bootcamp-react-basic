import { useState } from 'react';

import './Counter.css';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="counter__display">
        <p>Counter: {count}</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
