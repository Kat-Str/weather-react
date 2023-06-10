import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState(props.unit);

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
    return (
      <div>
        <span style={{ fontSize: "1.5rem" }}>
          <span style={{ fontSize: "4rem" }}>{props.temperature}</span>{" "}
          <span style={{ verticalAlign: "top" }}>
            °C |{" "}
            <a
              style={{ textDecoration: "none", color: "#0077b6" }}
              href="/"
              onClick={showFahrenheit}
            >
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span style={{ fontSize: "1.5rem" }}>
          <span style={{ fontSize: "4rem" }}>
            {Math.round((props.temperature * 9) / 5 + 32)}
          </span>{" "}
          <span style={{ verticalAlign: "top" }}>
            <a
              style={{ textDecoration: "none", color: "#0077b6" }}
              href="/"
              onClick={showCelcius}
            >
              °C
            </a>{" "}
            | °F
          </span>
        </span>
      </div>
    );
  }
}
