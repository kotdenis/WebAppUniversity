import {
    GET_DEPARTMENT_DATA,
    GET_SUBJECT_DATA,
    GET_ACHIEVEMENT_DATA,
    GET_ENROLLEE_DATA,
    GET_PROGRAMS_DATA,
    EDIT_DEPARTMENT_DATA,
    EDIT_SUBJECT_DATA,
    EDIT_ACHIEVEMENT_DATA,
    EDIT_ENROLLEE_DATA,
    EDIT_PROGRAM_DATA
} from '../constants/constants';

const initialState = [];


export function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DEPARTMENT_DATA:
            return [
                ...state,
                action.payload
            ];
        case EDIT_DEPARTMENT_DATA:
            return [
            ...state,
            action.payload
        ];
        default: return state;
    }
}

export function subjectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUBJECT_DATA:
            return [
                ...state,
                action.payload
            ];
        case EDIT_SUBJECT_DATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}

export function achievementReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACHIEVEMENT_DATA:
            return [
                ...state,
                action.payload
            ];
        case EDIT_ACHIEVEMENT_DATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}

export function enrolleeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ENROLLEE_DATA:
            return [
                ...state,
                action.payload
            ];
        case EDIT_ENROLLEE_DATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}


export function programsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROGRAMS_DATA:
            return [
                ...state,
                action.payload
            ];
        case EDIT_PROGRAM_DATA:
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}


