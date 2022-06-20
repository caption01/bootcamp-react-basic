const ReactBasicForm = ({ onSubmit }) => {
  return (
    <form id="form" onSubmit={onSubmit}>
      <div className="form__field">
        <label>FirstName:</label>
        <input type="text" name="firstName" />
      </div>
      <div className="form__field">
        <label>LastName:</label>
        <input type="text" name="lastName" />
      </div>
      <div className="form__submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

function App() {
  const onFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let formValues = {};

    for (const [name, value] of formData) {
      formValues = {
        ...formValues,
        [name]: value,
      };
    }

    const fullname = `${formValues.firstName} ${formValues.lastName}`;
    alert(`Hello ${fullname}`);
  };

  return (
    <div>
      <ReactBasicForm onSubmit={onFormSubmit} />
    </div>
  );
}

// Create Root Element

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
