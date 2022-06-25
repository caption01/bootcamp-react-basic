const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialCount = 0;

const action = {
  increment: INCREMENT,
  decrement: DECREMENT,
  reset: RESET,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export { counterReducer, initialCount, action };
