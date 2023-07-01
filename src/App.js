import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Accra" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://rebeccaokine.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rebecca Okine
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/rebeccaokine/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}