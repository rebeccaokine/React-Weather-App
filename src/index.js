import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      Open source code by <a href="https://github.com/rebeccaokine/React-Weather-App">Rebecca Okine</a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
