
const initialState = [];

export function personalReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_PERSONAL_DATA':
            return [...state, action.payload];
        case 'GET_DATA_BYPROGRAM':
            return [...state], action.payload;
            
        default: return state;
    }
}



