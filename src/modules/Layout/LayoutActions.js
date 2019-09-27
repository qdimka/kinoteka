import { TOGGLE } from './LayoutTypes';


const Toggle = (isOpen) => ({
  type: TOGGLE,
  payload: !isOpen
});

export {
  Toggle
};