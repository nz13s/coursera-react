import {combineReducers, createStore, applyMiddleware} from "redux";
import {createForms} from "react-redux-form";
import {Comments, Dishes, Leaders, Promotions} from "./reducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {InitialFeedback} from "./forms";

export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({feedback: InitialFeedback})
        }),
        applyMiddleware(thunk, logger)
    );
}