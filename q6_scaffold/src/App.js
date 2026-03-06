import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  // Accept text from Form.js and update state
  handleAdd = (text) => {
    this.setState({
      todos: [{ text }, ...this.state.todos]
    });
  };

  // Filter out the todo that matches the text to remove it
  handleRemove = (text) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.text !== text);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass handleAdd to Form */}
        <Form onAdd={this.handleAdd} />
        {/* Pass todos and handleRemove to List */}
        <List todos={this.state.todos} onRemove={this.handleRemove} />
      </div>
    );
  }
}