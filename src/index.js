import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
       <a href="https://github.com/rebeccaokine/React-Weather-App">Open source code by</a>Rebecca Okine
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
