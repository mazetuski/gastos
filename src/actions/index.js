// Dependencies
import { ADD_GASTO, AUTH_USER } from '../constants/actionTypes';


export const addGasto = gastos => ({ type: ADD_GASTO, payload: gastos});

export const authUser = isAuth => ({ type: AUTH_USER, payload: isAuth});
