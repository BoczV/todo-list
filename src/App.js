import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./pages/About";
import Axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
    ).then((res) => setTodos(res.data));
  }, []);

  
  // Toggle complete
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    todos.map((todo) => {
      if (todo.id === id && todo.completed) {
        Axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        ).then((res) => setTodos([...todos.filter((todo) => todo.id !== id)]));
      }
      return todo;
    });
  };

  const addToDo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    }).then((res) => setTodos([...todos, res.data]));
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addToDo={addToDo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
