import { FILMS_LOADED, FILMS_PENDING, SHOW_TOAST } from '../constants/action-types';
import { emit } from 'eiphop';

export const getFilmsListPending = () => ({
  type: FILMS_PENDING
});

export const getFilmsList = () => dispatch => {
  dispatch(getFilmsListPending());
  emit('getFilms', {})
    .then(data => dispatch({
      type: FILMS_LOADED,
      payload: {
        films: [...data]
      }
    }))
    .catch(err => dispatch({
      type: SHOW_TOAST,
      payload: {
        title: 'Error',
        message: err
      }
    }));
};
