import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <img
        id="weather-icon"
        src="https://openweathermap.org/img/wn/04d@2x.png"
        alt="Weather icon"
        className="hidden"
      />
      <h2 id="main-display">
        <span id="tepm-display">13</span>
        <sup>
          <a className="degrees" id="celsius" href="./">
            °C
          </a>
          |
          <a className="degrees" id="fahrenheit" href="./">
            °F
          </a>
        </sup>
      </h2>
    </div>
  );
}
