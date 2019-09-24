const initialState = {
    show: false,
    title: null,
    message: null,
    timeout: 2000
};

const toastsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
                ...action.payload
            };
    }
};

export default toastsReducer;
