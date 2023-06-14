import React, { useState } from "react";
import "./Forecast.css";
import Day from "./Day";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <span style={{ display: "flex", justifyContent: "space-evenly" }}>
        {forecast.map(function (forecast, index) {
          if (index < 5) {
            return (
              <span
                style={{ display: "flex", justifyContent: "space-evenly" }}
                key={index}
              >
                <Day data={forecast} />
              </span>
            );
          }
        })}
      </span>
    );
  } else {
    let apiKey = "f5029b784306910c19746e40c14d6cd3";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
