import {createAction, createSlice} from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

export const resetToDefault = createAction('root/reset-app')

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

    extraReducers: (builder) => {
        builder
            .addCase(
                resetToDefault,
                (state, action) => {
                    return []
                }
            )
    },
})

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions
export const todosReducer = todoSlice.reducer