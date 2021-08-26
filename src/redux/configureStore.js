import {combineReducers, createStore, applyMiddleware} from "redux";
import {Comments, Dishes, Leaders, Promotions} from "./reducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );
}