import React, { useState, useEffect } from "react";
import Form from "./Component/Form";
import "./App.css";
import Todo from "./Component/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setfiltered] = useState([]);

  //Run once
  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setfiltered(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setfiltered(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setfiltered(todos);
          break;
      }
    };
    filterHandler();
    saveLocal();
  }, [todos, status]);

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      settodos(todoLocal);
    }
  };
  return (
    <div>
      <header>
        <h1> Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        settodos={settodos}
        status={status}
        setStatus={setStatus}
      />
      <Todo filtered={filtered} todos={todos} settodos={settodos} />
    </div>
  );
}
export default App;
