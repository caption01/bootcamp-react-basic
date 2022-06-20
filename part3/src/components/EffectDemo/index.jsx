import { useState, useEffect } from 'react';

import './EffectDemo.css';

const LifeCycleDemo = ({ random }) => {
  // side effect render every-time
  useEffect(() => {
    console.log('I am side effect !');
  });

  // effect render after component mounted
  useEffect(() => {
    console.log('I am mounted effect !');
  }, []);

  // effect render when deps change
  useEffect(() => {
    console.log('I am effect with deps !', random);
  }, [random]);

  return (
    <div className="life-cycle">
      <p>I am a demo!</p>
    </div>
  );
};

const EffectDemo = () => {
  const [mount, setMount] = useState(true);
  const [random, setRandom] = useState(Math.random());

  const handleOnMount = () => {
    setMount(!mount);
  };

  const handleOnReRender = () => {
    setRandom(Math.random());
  };

  return (
    <div className="demo">
      <h1>Demo Number: {random}</h1>
      <button onClick={() => handleOnReRender()}>Re-render</button>
      <button onClick={() => handleOnMount()}>Mount/Unmount</button>
      {mount && <LifeCycleDemo random={random} />}
    </div>
  );
};

export default EffectDemo;
