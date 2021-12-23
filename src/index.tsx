import React from "react";
import * as ReactDOM from "react-dom";
import TodoList from "./component/TodoList";
import { store } from "./component/store";
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
