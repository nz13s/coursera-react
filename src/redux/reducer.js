import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import * as ActionTypes from "./ActionTypes";

export const Dishes = (state = {
                           isLoading: true,
                           errMess: null,
                           dishes: []
                       },
                       action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            };
        case ActionTypes.DISHES_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                dishes: []
            };
        case ActionTypes.DISHES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            };
        default:
            return state;
    }
}

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        default:
            return state;
    }
}