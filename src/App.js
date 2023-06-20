import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        // 현재의 값을 가져와서 새로운 배열로 반환한다.
        setToDos((current) => [toDo, ...current]);
        setToDo("");
    };
    const onClick = (i) => {
        setToDos(toDos.filter((v, toIdx) => i !== toIdx));
    };

    return (
        <div>
            <h1>Todo's ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="입력 해주세요😉"
                />
                <button>Add</button>
            </form>
            <hr />
            <ul>
                {toDos.map((v, i) => (
                    <li key={i}>
                        {v}
                        {/* onClick={deleteBtn} 이 아닌onClick={() => deleteBtn(index)} 이렇게 쓰는 이유는 "바로 실행"되지 않고 클릭을 기다리는 함수로 쓰기 위함 */}
                        <button onClick={() => onClick(i)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
