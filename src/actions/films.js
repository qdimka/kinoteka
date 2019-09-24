import {FILMS_LOADED, FILMS_PENDING} from "../constants/action-types";
import {showToast} from "./toasts";

export const getFilmsListPending = () => ({
  type: FILMS_PENDING
});

export const getFilmsList = () => dispatch => {
  dispatch(getFilmsListPending());
  // getFilms()
  //   .then(data => dispatch({
  //     type: FILMS_LOADED,
  //     payload: data
  //   }))
  //   .catch(r => dispatch(showToast("Error", r.message)));
};
