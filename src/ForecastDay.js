import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", " Mon", "Tue", " Wed", "Thu", " Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="Forecast-temperatures">
        <span className="temp-high">{maxTemp()}</span>
        {"  "}
        <span className="temp-low">{minTemp()}</span>
      </div>
    </div>
  );
}
