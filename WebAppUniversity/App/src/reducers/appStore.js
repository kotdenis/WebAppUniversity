import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { personalReducer } from './personalReducers';
import { rowOne, rowTwo, rowThree } from './adminReducer';
import { editReducer } from './adminEditReducer';
import { authReducer } from './authReducer';

const reducer = combineReducers({ personalReducer, rowOne, rowTwo, rowThree, editReducer, authReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;