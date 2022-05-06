import Input from "./input";
import TodoList from "./todoList";
import Filters from "./Filters";

function App() {
    return (
        <div className="App">
            <Input />
            <Filters />
            <TodoList />
        </div>
    );
}

export default App;
