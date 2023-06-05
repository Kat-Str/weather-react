import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div
      className="Weather"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        margin: "20px 0 80px",
      }}
    >
      <div className="main-weather-info" style={{ flex: "50%" }}>
        <div style={{ marginLeft: "30px" }}>
          <img
            style={{ width: "9rem", transform: "scale(1.2)" }}
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="Weather icon"
          />
          <div style={{ textAlign: "center", fontSize: "1.3rem" }}>
            Clear Sky
          </div>
        </div>
        <div className="temperature">22°</div>
      </div>
      <div style={{ flex: "50%", marginLeft: "80px" }}>
        <h1 style={{ fontSize: "2.8rem" }}>Lublin</h1>
        <h2 style={{ fontSize: "1.5rem" }}>Sunday, 18:45</h2>
        <ul>
          <li>Wind speed:</li>
          <li>Humidity:</li>
        </ul>
      </div>
    </div>
  );
}
