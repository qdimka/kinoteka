import { FILMS_LOADED, FILMS_PENDING } from './FilmsTypes';

const initialState = {
  loading: true,
  items: [],
  filters: [],
  paging: {}
};

const filmsLoading = (state) => ({
  ...state,
  loading: true
});

const filmsLoaded = (state, action) => ({
  ...state,
  loading: false,
  ...action.payload
});

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_PENDING:
      return filmsLoading(state);
    case FILMS_LOADED:
      return filmsLoaded(state, action);
    default:
      return state;
  }
};

export default filmsReducer;