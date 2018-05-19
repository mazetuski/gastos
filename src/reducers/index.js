//Dependencies
import {ADD_GASTO} from "../constants/actionTypes";

const initialState = {
    gastos: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GASTO:
            return {...state, gastos: [...state.gastos, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;