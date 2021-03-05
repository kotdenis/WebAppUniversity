import {
    EDIT_DEPARTMENT_DATA, EDIT_SUBJECT_DATA,
    EDIT_ACHIEVEMENT_DATA, EDIT_ENROLLEE_DATA,
    EDIT_PROGRAM_DATA
} from '../constants/constants';


const intitialState = [];

export function editReducer(state = intitialState, action) {
    switch (action.type) {
        case EDIT_DEPARTMENT_DATA:
            return action.payload;
        case EDIT_SUBJECT_DATA:
            return action.payload;
        case EDIT_ACHIEVEMENT_DATA:
            return action.payload;
        case EDIT_ENROLLEE_DATA:
            return action.payload;
        case EDIT_PROGRAM_DATA:
            return action.payload;
        default:
            return state;
    }
}