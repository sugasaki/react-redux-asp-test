const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const initialState = { count: 0 };


export const incrementAction = text => ({
  type: incrementCountType,
  text
});


export const decrementAction = text => ({
  type: incrementCountType,
  text
});


export const actionCreators = {
  increment: incrementAction,
  decrement: () => { type: incrementCountType }
};


export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.count - 1 };
  }

  return state;
};
