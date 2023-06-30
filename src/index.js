import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
       Coded by <a href="https://rebeccaokine.me">Rebecca Okine</a> and <a href="https://github.com/rebeccaokine/React-Weather-App">open sourced on github </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
