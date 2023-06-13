import React from "react";
import "./Forecast.css";
import Icons from "./Icons";

export default function Forecast() {
  const DisplayNextDay = () => {
    return (
      <div className="Forecast">
        <div className="forecast-box">
          <h5 style={{ display: "inline-block", marginBottom: "20px" }}>
            Next Day
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Icons icon="13d" size="50" />
          </div>
          <p className="temperature">
            <span>{Math.round(18)}° </span>
            <span style={{ opacity: "0.7" }}>{Math.round(9)}°</span>
          </p>
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
