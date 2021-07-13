import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/board";
import "./style.css";

const App = () => {
  return <Board />;
};

ReactDOM.render(<App />, document.getElementById("root"));