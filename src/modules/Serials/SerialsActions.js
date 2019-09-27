import { emit } from 'eiphop';
import { SERIALS_LOADED, SERIALS_PENDING } from './SerialsTypes';

const getSerialsPending = () => ({
  type: SERIALS_PENDING
});

const getSerials = () => dispatch => {
  dispatch(getSerialsPending());
  emit('getSerials', {})
    .then(data => dispatch({
      type: SERIALS_LOADED,
      payload: {
        items: [...data]
      }
    }));
};

export {
  getSerials,
  getSerialsPending
};
