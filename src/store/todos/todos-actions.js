import {createAction, nanoid} from "@reduxjs/toolkit";

// createAction()
export const addTodo = createAction(
    '@@todos/ADD_TODO',
    (title) => ({
        payload: {
            title,
            id: nanoid(),
            completed: false
        },
        meta: {},
    })
)

// передать в payload  явно
export const toggleTodo = createAction(
    '@@todos/TOGGLE_TODO',
    (id) => ({payload: id})
)

// передать значение в payload неявно
export const removeTodo = createAction('@@todos/REMOVE_TODO')