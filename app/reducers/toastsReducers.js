import {CLOSE_TOAST, SHOW_TOAST} from "../constants/action-types";

const initialState = {
    show: false,
    title: null,
    message: null,
    timeout: 2000
};

const toastsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                ...state,
                show: true,
                title: action.title,
                message: action.message
            };
        case CLOSE_TOAST:
            return {
                ...state,
                show: false,
                title: null,
                message: null
            };
        default:
            return  {...state}
    }
};

export default toastsReducer;