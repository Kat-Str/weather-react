import { func } from "prop-types";
import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "CLEAR_DAY",
  color: "#1e1e1e",
  size: 100,
  animate: true,
};

export default function Icons(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.icon]}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
