import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { personalReducer } from './personalReducers';
import {
    departmentReducer,
    subjectReducer,
    achievementReducer,
    enrolleeReducer,
    programsReducer
} from './adminReducer';
import { authReducer } from './authReducer';

const reducer = combineReducers({
    personalReducer,
    departmentReducer,
    subjectReducer,
    achievementReducer,
    enrolleeReducer,
    programsReducer,
    authReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;