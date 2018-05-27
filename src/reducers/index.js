//Dependencies
import {ADD_GASTO, AUTH_USER} from "../constants/actionTypes";
import {urlApi} from "../constants/constants";

const initialState = {
    gastos: [],
    isAuth: false,
    token: localStorage.getItem("tokenExpense")
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GASTO:
            return {...state, gastos: [...state.gastos, action.payload]};
        case AUTH_USER:

            let username = action.payload.user;
            let password = action.payload.pass;

            let formData = new FormData();
            formData.append('_username', username);
            formData.append('_password', password);
            fetch(urlApi + "/login_check",
                {
                    method: 'post',
                    mode: 'cors',
                    body: formData
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    let token= myJson.token;
                    let isAuth = true;
                    localStorage.setItem('tokenExpense', token);
                    state = Object.assign({token: token, isAuth: isAuth}, state);
                    window.location.href='http://'+window.location.host+"/";
                    console.log(myJson);
                    console.log(isAuth);
                });
            return state;
        default:
            return state;
    }
};

export default rootReducer;