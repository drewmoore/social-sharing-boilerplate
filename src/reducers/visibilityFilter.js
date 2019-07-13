import { TOGGLE_VISIBILITY } from "../actionTypes";

const initialState = { visible: true };

const visibilityFilter = (state = initialState, action) => {
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
