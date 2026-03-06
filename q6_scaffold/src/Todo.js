import { Component } from "react";

export class Todo extends Component {
  render() {
    const { todo, onRemove } = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={() => onRemove(todo.text)}>x</button>
      </div>
    );
  }
}