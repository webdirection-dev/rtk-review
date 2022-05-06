import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectVisibleTodos} from "../store/todos/todos-selectors";
import TodoItem from "./todoItem";

const TodoList = () => {
    const {filter} = useParams()
    const todos = useSelector(state => selectVisibleTodos(state, filter))

    return(
        <ul className="todos">
            {
                todos.map(i => <TodoItem key={i.id} {...i}/>)
            }
        </ul>
    )
}

export default TodoList