import {combineReducers} from 'redux';
import toggleReducer from './toggleReducer';
import filmsReducer from './filmsReducer';
import toastsReducer from './toastsReducers';
import serialsReducer from './serialsReducer';

const rootReducer = combineReducers({
    ui: toggleReducer,
    films: filmsReducer,
    toasts: toastsReducer,
    serials: serialsReducer
});

export default rootReducer;