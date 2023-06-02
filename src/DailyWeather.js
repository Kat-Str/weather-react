import React from "react";
import WeatherData from "./WeatherData";
import Temperature from "./Temperature";

export default function DailyWeather() {
  return (
    <div className="DailyWeather">
      <div>
        <Temperature />
      </div>
      <div>
        <WeatherData />
      </div>
    </div>
  );
}
