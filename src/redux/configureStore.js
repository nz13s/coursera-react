import {combineReducers, createStore} from "redux";
import {Comments, Dishes, Leaders, Promotions} from "./reducer";

export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
}