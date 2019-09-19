import {combineReducers} from "redux";
import toggleReducer from "./toggleReducer";
import filmsReducer from "./filmsReducer";

const rootReducer = combineReducers({
    ui: toggleReducer,
    films: filmsReducer
});

export default rootReducer;