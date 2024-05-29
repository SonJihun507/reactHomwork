import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      text: "잠자기",
      completed: true,
    }, 
    {
      id: Date.now(),
      text: "일찍 일어나기",
      completed: false,
    }
  ]);


  const addTodlHandler = (e) => {
    e.preventDefault();
    if (!input.trim()/*앞 뒤 띄어쓰기 없애기*/) return;
    const newTodo = {
      id : Date.now(),
      text : input,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodo(
      todo.map((todo) => 
        todo.id === id ? {... todo, completed : !todo.completed} : todo)
    );
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={addTodlHandler}>
        <input 
        type="text" 
        placeholder="할 일을 추가하세요" 
        value={input}
        onChange={inputChangeHandler}/>
        <button type="submit">추가</button>
      </form>
      <ul>
        {todo.map((todo) => (
          <li 
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          {todo.text}
          <button onClick={() => toggleTodoHandler(todo.id)}>
            {todo.completed ? "취소" : "완료"}
            </button>
          <button onClick={() => deleteTodoHandler(todo.id)}>삭제</button>
        </li>
        ))}
        
      </ul>
    </div>
  );
};

export default App;
