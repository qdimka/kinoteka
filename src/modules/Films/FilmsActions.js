import { FILMS_LOADED, FILMS_PENDING } from './FilmsTypes';
import { emit } from 'eiphop';

const getFilmsListPending = () => ({
  type: FILMS_PENDING
});

const getFilmsList = () => dispatch => {
  dispatch(getFilmsListPending());
  emit('getFilms', {})
    .then(data => dispatch({
      type: FILMS_LOADED,
      payload: {
        items: [...data]
      }
    }));
};

export {
  getFilmsListPending,
  getFilmsList
};
