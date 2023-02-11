import React from "react";
import Tolist from "./Tolist";
export default function Todo({ todos, settodos, filtered }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Tolist
            todos={todos}
            todo={todo}
            settodos={settodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}
