const Welcome = () => {
  return <h1>Welcome To React JSX</h1>;
};

const ButtonLabel = () => {
  return <h3>Button Label</h3>;
};

const ButtonJSX = () => {
  const onButtonClick = () => {
    console.log('click me');
  };

  return <button onClick={() => onButtonClick()}>Click Me</button>;
};

function App() {
  return (
    <div>
      <Welcome />
      <ButtonLabel />
      <ButtonJSX />
    </div>
  );
}

// Create Root Element

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
