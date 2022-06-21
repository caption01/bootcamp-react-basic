function buttonElement() {
  const btnProps = {
    onClick: () => console.log('click me !!!'),
  };
  const button = React.createElement('button', btnProps, ['Click me']);

  return button;
}

function app() {
  return React.createElement('div', {}, [
    'Welcome To React With API',
    'Button Label',
    buttonElement(),
  ]);
}

// Create Root Element

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(app());
