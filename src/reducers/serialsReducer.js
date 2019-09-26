import { SERIALS_LOADED, SERIALS_PENDING } from '../constants/action-types';

const initialState = {
  loading: true,
  serials: []
};

const serialsLoading = (state) => ({
  ...state,
  loading: true
});

const serialsLoaded = (state, action) => ({
  ...state,
  loading: false,
  ...action.payload
});

const serialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERIALS_PENDING:
      return serialsLoading(state);
    case SERIALS_LOADED:
      return serialsLoaded(state, action);
    default:
      return { ...state };
  }
};

export default serialsReducer;