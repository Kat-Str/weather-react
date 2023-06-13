import React from "react";
import Icons from "./Icons";

export default function Day(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }
  function min() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="Forecast">
      <div className="forecast-box">
        <h5 style={{ display: "inline-block", marginBottom: "20px" }}>
          {day()}
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Icons icon={props.data.weather[0].icon} size={50} />
        </div>
        <p className="temperature">
          <span>{max()}° </span>
          <span style={{ opacity: "0.7" }}>{min()}°</span>
        </p>
      </div>
    </div>
  );
}
