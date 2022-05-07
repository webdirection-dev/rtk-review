import {combineReducers} from "redux";
// import {todosReducer} from "./todos/todos-reducers";
import {todosReducer} from "./todos/slices/todos-slice";

export const rootReducer = combineReducers({
    todos: todosReducer,
})