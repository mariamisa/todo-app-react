import React from "react";

import "./style.css";

export default function TodoItem({ todo, handelCompleted, handelDelete }) {
  const { id, completed, title } = todo;
  return (
    <div className="todo-div">
      <input
        type="checkbox"
        checked={completed ? "checked" : ""}
        onChange={() => handelCompleted(id)}
      />
      <span className={completed ? "checked" : ""}>{title}</span>
      <button className="btn red" onClick={() => handelDelete(id)}>
        delete
      </button>
    </div>
  );
}
