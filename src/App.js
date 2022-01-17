import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer className="App-footer">
          <small>
            <div className="Credit">Coded by Tara Diego.</div>
            <div className="WeatherLink">
              <a
                href="https://agitated-spence-006f7c.netlify.app"
                alt="Tara's Dictionary App built with React"
                target="blank"
                title="Click to visit Tara's React Dictionary App for SheCodes"
              >
                <i class="fas fa-atlas"></i> Check out my React Dictionary App{" "}
                <i class="fas fa-atlas"></i>
              </a>
            </div>
            <div className="Github">
              Open-sourced on{" "}
              <a
                href="https://github.com/tarabite/react-weather-app"
                alt="Tara Diego's Dictionary project on GitHub"
                target="blank"
                title="Click to visit Tara's GitHub profile"
              >
                Github
              </a>
              .
            </div>
            <div className="Netlify">
              Hosted on{" "}
              <a
                href="https://stupefied-goodall-8299c5.netlify.app"
                alt="Copy and share this link from Netlify"
                target="blank"
                title="Tara's Netlify link"
              >
                Netlify
              </a>
              .
            </div>
          </small>
        </footer>
      </div>
    </div>
  );
}
