import {getFilms} from "../services/films.service";
import {FILMS_LOADED} from "../constants/action-types";

export const getFilmsList = () => {
    return dispatch => getFilms()
        .then(data => dispatch({
            type: FILMS_LOADED,
            payload: data
        }));
};