// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";
import { useState } from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") return;
        setToDos((currentArray) => [toDo, ...currentArray]);
        setTodo("");
    };

    const onClick = (i) => {
        console.log(i);
        setToDos(toDos.filter((v, idx) => idx !== i));
    };
    return (
        <div>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="test"
                    value={toDo}
                    onChange={onChange}
                    placeholder="write here!"
                />
                <button>add</button>
            </form>
            <ul>
                {toDos.map((v, i) => (
                    <li key={i}>
                        {v}
                        <button onClick={() => onClick(i)}>X</button>
                    </li>
                ))}
            </ul>
        </div>

        // <Router>
        //     <Routes>
        //         <Route path="/movie/:id" element={<Detail />}></Route>
        //         <Route path="/" element={<Home />}></Route>
        //     </Routes>
        // </Router>
    );
}

export default App;
