import React from "react";
import * as ReactDOM from "react-dom";
import TodoList from "./component/taskTodo/TodoList";
import { store } from "./component/taskTodo/store";
import { Provider } from "react-redux";

function App() {
  return <TodoList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
