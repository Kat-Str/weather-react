import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState("");
  let [city, setCity] = useState(props.defaultCity);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    let apiKey = "73a00877081bd43422bdee0f3022beb5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    setIsLoading(true);

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        setWeatherData({ submitted: false });
      });
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      submitted: true,
      displayedCity: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coords: response.data.coord,
    });
    setIsLoading(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="SearchForm">
        <form id="form-city" onSubmit={handleSubmit}>
          <input type="submit" id="search-button" value="search" />
          <input
            type="search"
            id="search-engine"
            placeholder="Enter the city"
            onChange={updateCity}
          />
        </form>
      </div>
      {weatherData.submitted && (
        <div>
          <div
            className="Weather"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "0 0 40px",
            }}
          >
            <div
              className="left-side"
              style={{
                display: "grid",
                gridTemplateColumns: "2",
                placeItems: "center",
                flex: "50%",
                alignItems: "flex-end",
              }}
            >
              <div className="main-weather-info" style={{ flex: "50%" }}>
                <div style={{ margin: "15px" }}>
                  <Icons icon={weatherData.icon} size={100} />
                </div>
                <div className="temperature">
                  {" "}
                  <Temperature
                    temperature={weatherData.temperature}
                    unit="celcius"
                  />
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  textTransform: "capitalize",
                  alignSelf: "flex-start",
                }}
              >
                {weatherData.description}
              </div>
            </div>
            <div style={{ flex: "50%", marginLeft: "80px" }}>
              <h1 style={{ fontSize: "2.8rem" }}>
                {weatherData.displayedCity}
              </h1>
              <h2 style={{ fontSize: "1.5rem" }}>
                <FormattedDate date={weatherData.date} />
              </h2>
              <ul>
                <li>Wind speed: {weatherData.wind} km/h</li>
                <li>Humidity: {weatherData.humidity}%</li>
              </ul>
            </div>
          </div>
          <Forecast coords={weatherData.coords} />
        </div>
      )}
      {!weatherData.submitted && isLoading && (
        <MagnifyingGlass
          visible={true}
          height="180"
          width="180"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#c87d4c "
        />
      )}
    </div>
  );
}
