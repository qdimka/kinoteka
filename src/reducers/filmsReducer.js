import {FILMS_LOADED} from "../constants/action-types";

const initialState = {
    loading: true,
    films: {
        count: 0,
        items: []
    }
};

const filmsReducer = (state = initialState, action) => {
    if (action.type === FILMS_LOADED) {
        return {
            loading: false,
            films: {...action.payload}
        };
    }
    return state;
};

export default filmsReducer;