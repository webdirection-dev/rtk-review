import {useDispatch} from "react-redux";
import {resetToDefault} from "../store/todos/slices/todos-slice";

const ResetApp = () => {
    const dispatch = useDispatch()

    return(
        <button onClick={() => dispatch(resetToDefault())}>reset</button>
    )
}

export default ResetApp