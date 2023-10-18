import { useState } from "react";

const App = () => {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (value === "") {
            return;
        }
        setTodo((curr) => [value, ...curr]);
        setValue("");
    };
    const onclick = (i) => {
        setTodo(todo.filter((v, idx) => idx !== i));
    };
    return (
        <div>
            <h1>to do list</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="할일을 입력하세요"
                />
                <button>add</button>
            </form>
            <ul>
                {todo.map((v, i) => (
                    <li key={i}>
                        {v}
                        <button onClick={() => onclick(i)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
