import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          Coded by Tara Diego
          <br />
          Open-sourced on{" "}
          <a href="https://github.com/tarabite/react-weather-app">GitHub</a>
          .
          <br />
          Hosted on{" "}
          <a href="https://stupefied-goodall-8299c5.netlify.app">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}
