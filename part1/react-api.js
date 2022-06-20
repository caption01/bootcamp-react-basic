function buttonElement() {
  const btnProps = {
    onClick: () => console.log('click me !!!'),
  };
  const button = React.createElement('button', btnProps, ['Click me']);

  return button;
}

function App() {
  return React.createElement('div', {}, [
    <h1>Welcome To React With API</h1>,
    <h3>Button Label</h3>,
    buttonElement(),
  ]);
}

// Create Root Element

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
