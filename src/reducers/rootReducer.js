import {combineReducers} from 'redux';
import toggleReducer from './toggleReducer';
import filmsReducer from './filmsReducer';
import toastsReducer from './toastsReducers';

const rootReducer = combineReducers({
    ui: toggleReducer,
    films: filmsReducer,
    toasts: toastsReducer
});

export default rootReducer;