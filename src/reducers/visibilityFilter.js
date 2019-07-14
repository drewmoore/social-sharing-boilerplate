import { TOGGLE_VISIBILITY } from "../actionTypes";

const defaultState = { visible: true };

const initialize = (initialState) => (
  Object.assign({}, defaultState, initialState)
);

const visibilityFilter = (initialState = {}) => (state = initialize(initialState), action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY: {
      return Object.assign({}, state, { visible: !state.visible });
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
