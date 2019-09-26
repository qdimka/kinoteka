import { emit } from 'eiphop';
import { SERIALS_LOADED, SERIALS_PENDING } from './SerialsTypes';

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
    }));
};
