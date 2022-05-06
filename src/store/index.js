import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";

import {todosReducer} from "./todos/todos-reducers";
import {defaultTodos} from "../data/defaultTodos";

export const store = configureStore({
    //не требуется использовать combineReducers
    reducer: {
        todos: todosReducer,
    },

    // default state
    preloadedState: {
        todos: defaultTodos,
    },

    //middleware - это массив, поэтому конкатенируем его с нужным инструментом,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    enhancers: [],

    devTools: true,
})

//createStore
// import { createStore } from "redux";
// import {rootReducer} from "./root-reducer";
//
// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
