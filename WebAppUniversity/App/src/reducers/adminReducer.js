import {
    GET_FIRST_ADMINDATA,
    GET_SECOND_ADMINDATA,
    GET_THIRD_ADMINDATA
} from '../constants/constants';

const initialState = [];

export function rowOne(state = initialState, action) {
    switch (action.type) {
        case GET_FIRST_ADMINDATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}

export function rowTwo(state = initialState, action) {
    switch (action.type) {
        case GET_SECOND_ADMINDATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}

export function rowThree(state = initialState, action) {
    switch (action.type) {
        case GET_THIRD_ADMINDATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}


