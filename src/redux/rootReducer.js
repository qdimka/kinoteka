import { combineReducers } from 'redux';
import serialsReducer from '../modules/Serials/SerialsReducers';
import filmsReducer from '../modules/Films/FilmsReducer';
import toggleReducer from '../modules/Layout/LayoutReducer';

const rootReducer = combineReducers({
    layout: toggleReducer,
    films: filmsReducer,
    serials: serialsReducer
});

export default rootReducer;