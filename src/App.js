import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <button className="btn btn-primary">Hello</button>
        <footer>
          Coded by Tara Diego and{" "}
          <a
            href="https://github.com/tarabite/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
