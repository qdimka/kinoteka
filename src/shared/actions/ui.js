import { TOGGLE } from '../constants/action-types';

const Toggle = (isOpen) => ({
  type: TOGGLE,
  payload: !isOpen
});

export default {
  Toggle
};