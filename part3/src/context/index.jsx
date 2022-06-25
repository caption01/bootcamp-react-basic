import { useState, createContext } from 'react';

const USE_STATE = 'USE_STATE';
const USE_EFFECT = 'USE_EFFECT';

const TopicContext = createContext();

const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState(null);
  const value = {
    topic: topic,
    setTopic: setTopic,
  };
  return (
    <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
  );
};

export { TopicContext, TopicProvider, USE_STATE, USE_EFFECT };
