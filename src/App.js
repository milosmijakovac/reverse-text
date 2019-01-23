import React, { Component } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Reverse from "./components/Reverse";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, text: "Learn JavaScript", done: false },
      { id: 2, text: "Learn React", done: false }
    ]
  };

  markComplete = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    });
  };

  handleDelete = id => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)]
    });
  };

  addTask = (text) => {
    const newTask = {
      id: 3,
      text,
      done: false
    }
    this.setState({
      items: [...this.state.items, newTask]
    })
  }

  render() {
    return (
      <div className="App">
        <Header style={headerStyle} />
        <AddTask addTask={this.addTask} />
        <h2>Tasks:</h2>
        <ol>
          {this.state.items.map(item => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.markComplete(item.id)}
                />

                <span className={item.done ? "done" : ""}>
                  <Reverse textReverse={item.text} />
                  <button
                    className="btn"
                    onClick={() => this.handleDelete(item.id)}
                  >
                    x
                  </button>
                </span>
              </label>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default App;
