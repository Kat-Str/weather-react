import React from "react";
import SearchForm from "./SearchForm.js";
import DailyWeather from "./DailyWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./styles.css";
import "./DailyWeather.css";
import "./WeatherData.css";
import "./Temperature.css";
import "./SearchForm.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <DailyWeather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
