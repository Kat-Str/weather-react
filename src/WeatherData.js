import React from "react";

export default function WeatherData() {
  return (
    <div className="WeatherData">
      <h1 id="displayed-city">Lublin</h1>
      <p id="current-time" className="hidden">
        Sunday, 17:00
      </p>
      <ul className="weather-list">
        <li id="weather-details" className="hidden">
          Clear Sky
        </li>
        <li id="wind-speed" className="hidden">
          Wind speed: 2.16 m/s
        </li>
        <li id="humidity" className="hidden">
          Humidity: 84%
        </li>
      </ul>
    </div>
  );
}
