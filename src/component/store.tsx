import { combineReducers, compose, createStore } from "redux";
import TodoRed from "./reducer";

const reducer = combineReducers({ TodoRed });

export const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>;
