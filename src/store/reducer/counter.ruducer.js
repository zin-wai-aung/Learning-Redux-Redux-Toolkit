const initialState = {
  value: 0,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return (state = { value: state.value + 1 });
    }
    case "decrease": {
      return (state = { value: state.value - 1 });
    }
    default:
      return state;
  }
};
