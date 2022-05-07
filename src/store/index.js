import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

// import {todosReducer} from "./todos/slices/todos-slice";
import {rootReducer} from "./root-reducer";
import {defaultTodos} from "../data/defaultTodos";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    //без redux-persist
    //не требуется использовать combineReducers!
    // reducer: {
    //     todos: todosReducer,
    // },

    //при использовании redux-persist
    reducer: persistedReducer,

    // default state
    preloadedState: {
        todos: defaultTodos,
    },

    //middleware - это массив, поэтому конкатенируем его с нужным инструментом,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),

    enhancers: [],

    //подключаем Redux-DevTools!
    devTools: true,
})

//при использовании redux-persist
export const persistor = persistStore(store)

//createStore
// import { createStore } from "redux";
// import {rootReducer} from "./root-reducer";
//
// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
