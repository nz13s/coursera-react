import * as ActionTypes from "./ActionTypes";

export const Dishes = (state = {isLoading: true, errMess: null, dishes: []}, action) => {
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

export const Comments = (state = {errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};

        case ActionTypes.ADD_COMMENTS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                comments: action.payload
            };

        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                comments: []
            };

        default:
            return state;
    }
}

export const Promotions = (state = {isLoading: true, errMess: null, promotions: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMO:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                promotions: action.payload
            };
        case ActionTypes.PROMOS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                promotions: []
            };
        case ActionTypes.PROMOS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                promotions: []
            };
        default:
            return state;
    }
}

export const Leaders = (state = {isLoading: true, errMess: null, leaders: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                leaders: action.payload
            };
        case ActionTypes.LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                leaders: []
            };
        case ActionTypes.LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                leaders: []
            };
        default:
            return state;
    }
}