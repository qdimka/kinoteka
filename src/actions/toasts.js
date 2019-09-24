import {CLOSE_TOAST, SHOW_TOAST} from "../constants/action-types";

export const showToast = (title, message) => ({
  type: SHOW_TOAST,
  payload: {
    title,
    message,
    show: true
  }
});

export const closeToast = () => ({
  type: CLOSE_TOAST,
  payload: {
    title: null,
    message: null,
    show: false
  }
});
