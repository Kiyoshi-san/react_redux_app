/* CRIANDO A STORE 
E DIREMOS QUAIS SERÃO OS SEUS RESPECTIVOS REDUCERS
*/
import { createStore } from "redux";
import { Reducers } from "../reducers";

export const Store = createStore(Reducers);