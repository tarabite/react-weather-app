import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <hr />
      <h2>This will be the Forecast...</h2>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thu</div>
            <WeatherIcon code="01d" size={32} />
            <div className="Forecast-temperatures">
              <span className="temp-high">high°</span>{" "}
              <span className="temp-low">low°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
