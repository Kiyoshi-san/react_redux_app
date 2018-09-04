import { clickReducer } from "./clickReducer";
import { combineReducers } from "redux";

/* 
Aqui definimos qual será a chave do Reducer na Store quando quisermos acessar o seu estado, além de podermos combinar vários Reducers para serem conectados à Store.
*/
export const Reducers = combineReducers({
    clickState: clickReducer
});