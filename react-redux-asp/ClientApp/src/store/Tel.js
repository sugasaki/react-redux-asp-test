const requestTelnumberType = 'REQUEST_TELNUMBERS';
const receiveTelnumberType = 'RECEIVE_TELNUMBERS';
const initialState = { telnumbers: [], isLoading: false };

export const actionCreators = {
  requestTelnumbers: () => async (dispatch, getState) => {

    if (getState().peopleStore.isLoading) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }


    dispatch({ type: requestTelnumberType });

    const url = `http://`;
    const response = await fetch(url);
    const people = await response.json();

    dispatch({
      type: receiveTelnumberType,
      people
    });
  }

};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestTelnumberType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveTelnumberType) {
    return {
      ...state,
      people: action.people,
      isLoading: false
    };
  }

  return state;
};
