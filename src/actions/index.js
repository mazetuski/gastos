// Dependencies
import {ADD_GASTO, AUTH_USER, IS_LOGGING} from '../constants/actionTypes';
import {urlApi} from "../constants/constants";


export const addGasto = gastos => ({type: ADD_GASTO, payload: gastos});

export const authUser = isAuth => ({type: AUTH_USER, payload: isAuth});

