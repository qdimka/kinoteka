import { FILMS_LOADED, FILMS_PENDING, SHOW_TOAST } from '../constants/action-types';
import { emit } from 'eiphop';

export const getFilmsListPending = () => ({
  type: FILMS_PENDING
});

export const getFilmsList = () => dispatch => {
  dispatch(getFilmsListPending());
  emit('getFilms', 'Тарантино')
    .then(res => dispatch({
      type: FILMS_LOADED,
      payload: {
        films: {
          count: res.length,
          items: res
        }
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
