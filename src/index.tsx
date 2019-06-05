import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  return <p>Hello world!</p>
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);