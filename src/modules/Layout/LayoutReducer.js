import { TOGGLE } from './LayoutTypes';

const initialState = {
  isOpen: true
};

const toggleReducer = (state = initialState, action) => {
  if (action.type === TOGGLE) {
    return {
      isOpen: action.payload
    };
  }
  return state;
};

export default toggleReducer;