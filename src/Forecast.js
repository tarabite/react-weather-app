import React from "react";
import WeatherIcon from "./WeatherIcon";

import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "367dabceb4dd658d73d3c5bcb26aa342";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
