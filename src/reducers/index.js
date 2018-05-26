//Dependencies
import {ADD_GASTO, AUTH_USER} from "../constants/actionTypes";
import {urlApi} from "../constants/constants";

const initialState = {
    gastos: [],
    isAuth: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GASTO:
            return {...state, gastos: [...state.gastos, action.payload]};
        case AUTH_USER:

            let username = action.payload.user;
            let password = action.payload.pass;

            let opts={
              "username": username,
              "password": password
            };

            let url = urlApi + "/login_check";
            console.log(url);

            fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts)
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    console.log(myJson);
                });

            let isAuth = true;
            return {...state, isAuth: [...state.isAuth, isAuth]};
        default:
            return state;
    }
};

export default rootReducer;