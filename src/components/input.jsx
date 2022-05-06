import {useDispatch} from "react-redux";

//импорт для createAction
// import {addTodo} from "../store/todos/todos-actions";

//импорт для createSlice (альтернатива createAction)
import {addTodo} from "../store/todos/todos-reducers";

const Input = () => {
    const dispatch = useDispatch()

    const handelInput = (e) => {
        e.preventDefault()
        const input = e.target.title.value

        if (input) dispatch(addTodo(input))
        e.target.reset()
    }

    return(
        // неуправляемая форма
        <form className='input' onSubmit={handelInput}>
            <input
                type="search"
                name='title'
                placeholder='new todo'
            />

            <input
                type='submit'
                value='Add Todo'
                style={{cursor: 'pointer'}}
            />
        </form>
    )
}

export default Input