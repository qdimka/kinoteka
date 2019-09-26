import { combineReducers } from 'redux';
import serialsReducer from '../routes/Serials/SerialsReducers';
import filmsReducer from '../routes/Films/FilmsReducer';
import toggleReducer from '../shared/reducers/toggleReducer';

const rootReducer = combineReducers({
    ui: toggleReducer,
    films: filmsReducer,
    serials: serialsReducer
});

export default rootReducer;