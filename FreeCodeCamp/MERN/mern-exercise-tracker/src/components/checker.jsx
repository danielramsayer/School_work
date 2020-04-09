import React from "react";
import ReactDom from "react-dom";
import todosData from "./todosData";
import "./checkAndRun.scss";

function TodoItem(props) {
  let checked;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />{" "}
      {props.item.completed ? (
        <div className="checked">{props.item.text}</div>
      ) : (
        <div>{props.item.text}</div>
      )}
    </div>
  );
}

class Checker extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updated = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updated
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div>{todoItems}</div>;
  }
}
export default Checker;

// export default function Checker() {
//   let todoItems = todosData.map(todoItem => (
//     <div key={todoItem.key}>
//       <input
//         type="checkbox"
//         checked={todoItem.completed}
//         onChange={() => console.log("Changed!")}
//         onClick={() => console.log("Definitely shouldn't have clicked that.")}
//       />

//       <p>{todoItem.text}</p>
//     </div>
//   ));

//   return <div>{todoItems}</div>;
// }
