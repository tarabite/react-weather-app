import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <h2>This will be the Forecast...</h2>
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
              <ForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "367dabceb4dd658d73d3c5bcb26aa342";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "In progress...";
  }
}
