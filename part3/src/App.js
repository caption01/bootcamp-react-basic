import { useState } from 'react';

import Counter from './components/Counter';
import EffectDemo from './components/EffectDemo';

import './App.css';

const USE_STATE = 'USE_STATE';
const USE_EFFECT = 'USE_EFFECT';

function App() {
  const [topic, setTopic] = useState(null);

  const handleOnSelect = (selectedTopic) => {
    setTopic(selectedTopic);
  };

  return (
    <div className="app">
      <header>
        <h1>Learn React</h1>
      </header>
      <section className="app__topic">
        <h3>Select Topic: {topic}</h3>
        <button onClick={() => handleOnSelect(USE_STATE)}>useState</button>
        <button onClick={() => handleOnSelect(USE_EFFECT)}>useEffect</button>
      </section>
      <section className="app__content">
        <h3>content</h3>
        <div className="app__content--body">
          {topic === USE_STATE && <Counter />}
          {topic === USE_EFFECT && <EffectDemo />}
        </div>
      </section>
    </div>
  );
}

export default App;
