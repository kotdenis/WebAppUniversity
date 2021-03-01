import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { personalReducer } from './personalReducers';
import { rowOne, rowTwo, rowThree } from './adminReducer';

const reducer = combineReducers({ personalReducer, rowOne, rowTwo, rowThree });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;