import React from "react";

export default function Forecast() {
  const DisplayNextDay = () => {
    return (
      <span className="Forecast">
        <span>
          <h5>Next Day</h5>
          <img
            id="weather-icon"
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="Weather icon"
            width="50px"
            height="50px"
          />
          <p className="temperature">
            <span className="max-day-temp">{Math.round(18)}° </span>
            <span className="min-day-temp">{Math.round(9)}°</span>
          </p>
        </span>
      </span>
    );
  };
  return (
    <div
      className="Forecast"
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
      }}
    >
      {DisplayNextDay()}
      {DisplayNextDay()}
      {DisplayNextDay()}
      {DisplayNextDay()}
      {DisplayNextDay()}
      {DisplayNextDay()}
    </div>
  );
}
