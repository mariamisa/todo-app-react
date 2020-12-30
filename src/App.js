import React, { Component } from "react";

import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  state = {
    todo: [],
    inputValue: "",
    id: 0,
  };
  handelChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };
  handelAddClick = () => {
    const { todo, id, inputValue } = this.state;
    if (inputValue.trim()) {
      this.setState({
        todo: [...todo, { id: id + 1, title: inputValue, completed: false }],
        inputValue: "",
        id: id + 1,
      });
    }
  };
  handelCompleted = (id) => {
    const updatedTodo = this.state.todo.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
        return el;
      }
      return el;
    });
    this.setState({ todo: updatedTodo });
  };
  handelDelete = (id) => {
    const todoFiltered = this.state.todo.filter((el) => el.id !== id);
    this.setState({ todo: todoFiltered });
  };
  render() {
    return (
      <div className="todo_container">
        <h1>Todo App</h1>
        <InputBar
          handelChange={this.handelChange}
          handelAddClick={this.handelAddClick}
          value={this.state.inputValue}
        />
        <TodoList
          todos={this.state.todo}
          handelCompleted={this.handelCompleted}
          handelDelete={this.handelDelete}
        />
      </div>
    );
  }
}

export default App;
