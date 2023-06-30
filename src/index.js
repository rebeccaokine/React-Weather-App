import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
       Coded by <a href="https://rebeccaokine.me" target="_blank" rel="noopener">Rebecca Okine</a> and <a href="https://github.com/rebeccaokine/React-Weather-App" target="_blank" rel="noopener">open sourced on github </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
