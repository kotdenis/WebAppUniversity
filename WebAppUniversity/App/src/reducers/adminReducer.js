import { combineReducers } from 'redux';

const initialState = [];

export function rowOne(state = initialState, action) {
    switch (action.type) {
        case 'GET_FIRST_ADMINDATA':
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}

export function rowTwo(state = initialState, action) {
    switch (action.type) {
        case 'GET_SECOND_ADMINDATA':
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}

export function rowThree(state = initialState, action) {
    switch (action.type) {
        case 'GET_THIRD_ADMINDATA':
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}


//export function adminReducer(state = initialState, action) {
//    switch (action.type) {
//        case 'GET_FIRST_ADMINDATA':
//            return [
//                ...state,
//                action.payload
//            ];
//        case 'GET_SECOND_ADMINDATA':
//            return [
//                ...state,
//                action.payload
//            ];
//        case 'GET_THIRD_ADMINDATA':
//            return [
//                ...state,
//                action.payload
//            ];
//        default: return state;
//    }
//}
