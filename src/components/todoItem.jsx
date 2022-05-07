import {useDispatch} from "react-redux";

//импорт для createAction
// import {toggleTodo, removeTodo} from "../store/todos/todos-actions";

//импорт для createSlice (альтернатива createAction)
import {toggleTodo, removeTodo} from "../store/todos/slices/todos-slice";

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    return(
        <li className='todo'>
            <span
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => dispatch(removeTodo(id))}
            >x</span>

            <label
                htmlFor={title}
                className='todo_title'
                style={completed ? {textDecoration: 'line-through'} : null}
            >{title}</label>

            <input
                id={title}
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
            />
        </li>
    )
}

export default TodoItem