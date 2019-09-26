import { FILMS_LOADED, FILMS_PENDING, SERIALS_LOADED, SERIALS_PENDING, SHOW_TOAST } from '../constants/action-types';
import { emit } from 'eiphop';

export const getSerialsPending = () => ({
  type: SERIALS_PENDING
});

export const getSerials = () => dispatch => {
  dispatch(getSerialsPending());
  emit('getSerials', {})
    .then(data => dispatch({
      type: SERIALS_LOADED,
      payload: {
        serials: [...data]
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
