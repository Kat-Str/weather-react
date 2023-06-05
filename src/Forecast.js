import React from "react";
import "./Forecast.css";
export default function Forecast() {
  const DisplayNextDay = () => {
    return (
      <div className="Forecast">
        <div className="forecast-box">
          <h5 style={{ display: "inline-block", margin: "0" }}>Next Day</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
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
          </div>
        </div>
      </div>
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
    </div>
  );
}
