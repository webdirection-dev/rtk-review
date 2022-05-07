import Input from "./input";
import TodoList from "./todoList";
import Filters from "./Filters";
import ResetApp from "./ResetApp";

function App() {
    return (
        <div className="App">
            <Input />
            <Filters />
            <TodoList />
            <ResetApp />
        </div>
    );
}

export default App;
