import {FILMS_LOADED, FILMS_PENDING} from "../constants/action-types";

const initialState = {
    loading: true,
    films: {
        count: 0,
        items: []
    }
};

const filmsLoading = (state) => {
    return {
        ...state,
        loading: true
    }
}

const filmsLoaded = (state, action) => {
    return {
        ...state,
        loading: false,
        films: {
            ...action.payload
        }
    }
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILMS_PENDING:
            return filmsLoading(state);
        case FILMS_LOADED:
            return filmsLoaded(state, action);
        default:
            return { ...state };
    }
};

export default filmsReducer;