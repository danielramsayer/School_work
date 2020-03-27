import React from "react";
import ReactDom from "react-dom";
import todosData from "./todosData";

export default function Checker() {
  let todoItems = todosData.map(todoItem => (
    <div key={todoItem.key}>
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => console.log("Changed!")}
        onClick={() => console.log("Definitely shouldn't have clicked that.")}
      />

      <p>{todoItem.text}</p>
    </div>
  ));

  return <div>{todoItems}</div>;
}
