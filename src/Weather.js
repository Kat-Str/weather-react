import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";

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
      date: "today",
      icon: "nothing here",
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
        <div
          className="Weather"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "0 0 60px",
          }}
        >
          <div className="main-weather-info" style={{ flex: "50%" }}>
            <div style={{ marginLeft: "30px" }}>
              <img
                style={{ width: "9rem", transform: "scale(1.2)" }}
                src="https://openweathermap.org/img/wn/04d@2x.png"
                alt="Weather icon"
              />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  textTransform: "capitalize",
                }}
              >
                {weatherData.description}
              </div>
            </div>
            <div className="temperature">{weatherData.temperature}°</div>
          </div>
          <div style={{ flex: "50%", marginLeft: "80px" }}>
            <h1 style={{ fontSize: "2.8rem" }}>{weatherData.displayedCity}</h1>
            <h2 style={{ fontSize: "1.5rem" }}>Sunday, 18:45</h2>
            <ul>
              <li>Wind speed: {weatherData.wind}km/h</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
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
