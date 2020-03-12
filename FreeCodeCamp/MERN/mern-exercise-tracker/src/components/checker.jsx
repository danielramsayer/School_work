import React from "react";
import ReactDom from "react-dom";
import todosData from "./todosData";

export default function Checker() {
  let todoItems = todosData.map(todoItem => (
    <div key={todoItem.key}>
      <input type="checkbox" checked={todoItem.completed} />

      <p>{todoItem.text}</p>
    </div>
  ));

  return <div>{todoItems}</div>;
}
