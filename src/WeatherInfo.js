import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Forecast.css";

export default function WeatherInfo(props) {
  // This is the collection of Weather components for the Date, Icon, Temperature results, and Weather Condition results...
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>
              <span className="temp-high">
                H: {Math.round(props.data.max)}°F
              </span>
              {" ~ "}
              <span className="temp-low">
                L: {Math.round(props.data.min)}°F
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
