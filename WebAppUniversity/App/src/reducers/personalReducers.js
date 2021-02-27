import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = [];

const initialDatas = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PERSONAL_DATA':
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
};

let store = createStore(initialDatas, applyMiddleware(thunk));
export default store;