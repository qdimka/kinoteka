import {getFilms} from "../services/films.service";
import {FILMS_LOADED, FILMS_PENDING, SHOW_TOAST} from "../constants/action-types";

export const getFilmsListPending = () => {
    return {
        type: FILMS_PENDING
    }
};

export const getFilmsList = () => {
    return dispatch => {
        dispatch(getFilmsListPending());
        getFilms()
            .then(data => dispatch({
                type: FILMS_LOADED,
                payload: data
            }))
            .catch(r => dispatch({
                type: SHOW_TOAST,
                message: r.message,
                title: "error_title"
            }));
    }
};