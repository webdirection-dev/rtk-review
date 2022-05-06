import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

//импорты для createReducer
// import {createReducer} from "@reduxjs/toolkit";
// import {addTodo, toggleTodo, removeTodo} from "./todos-actions";
// import {defaultTodos} from "../../data/defaultTodos";

// createReducer

//Вариант 1 без функциии builder
// export const todosReducer = createReducer(
//     defaultTodos,
//     {
//         [addTodo]: (state, action) => void state.push(action.payload),
//
//         [toggleTodo]: (state, action) => {
//             const todo = state.find(i => i.id === action.payload)
//             todo.completed = !todo.completed
//         },
//
//         [removeTodo]: (state, action) => state.filter(i => i.id !== action.payload),
//     }
// )

//Вариант 2 с функцией builder (рекомендовано самим Redux)
// export const todosReducer = createReducer(
//     defaultTodos,
//     (builder) => {
//         builder
//             .addCase(
//                 addTodo,
//                 (state, action) => {
//                     state.push(action.payload)
//                 }
//             )
//
//             .addCase(
//                 toggleTodo,
//                 (state, action) => {
//                     const todo = state.find(i => i.id === action.payload)
//                     todo.completed = !todo.completed
//                 }
//             )
//
//             .addCase(
//                 removeTodo,
//                 (state, action) => {
//                     return state.filter(i => i.id !== action.payload)
//                 }
//             )
//     }
// )

// Вариант 3
// export const todosReducer2 = (state = defaultTodos, action) => {
//     switch (action.type) {
//         case addTodo.toString(): {
//             return [
//                 ...state,
//                 {...action.payload}
//             ];
//         }
//
//         case toggleTodo.toString(): {
//             return state.map((i) =>
//                 i.id === action.payload ? { ...i, completed: !i.completed } : i
//             );
//         }
//
//         case removeTodo.toString(): return state.filter(i => i.id !== action.payload)
//         default: return state
//     }
// };

// createSlice (рекомендовано самим Redux)
// Содержит 4 сущности name, initialState, reducers, extraReducers
const todoSlice = createSlice({
    name: '@@todos',
    initialState: [],

    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            //предподготовка будущего payload
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false
                },
                meta: {},
            })
        },

        toggleTodo: (state, action) => {
            const todo = state.find(i => i.id === action.payload)
            todo.completed = !todo.completed
        },

        removeTodo: (state, action) => {
            return state.filter(i => i.id !== action.payload)
        },
    },

    // extraReducers: (builder) => {
    //     builder
    //         .addCase()
    //         .addCase()
    // },
})

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions
export const todosReducer = todoSlice.reducer