import React from "react";
import "./Forecast.css";
import Icons from "./Icons";
import axios from "axios";

export default function Forecast(props) {
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handleResponse);
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
            <Icons icon="13d" size={50} />
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
