export const selectGetTodos = state => state.todos

export const selectActiveTodos = state => state.todos.filter(i => !i.completed)

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todos
        }

        case 'active': {
            return state.todos.filter(i => !i.completed)
        }

        case 'completed': {
            return state.todos.filter(i => i.completed)
        }

        default: {
            return state.todos
        }
    }
}