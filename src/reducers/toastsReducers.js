import { CLOSE_TOAST, SHOW_TOAST } from '../constants/action-types';

const initialState = {
  show: false,
  title: null,
  message: null
};

const toastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
    case CLOSE_TOAST:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};

export default toastsReducer;
