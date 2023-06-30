import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function search() {
  const apiKey="4cb1b0o198a509a8f2a2tffe1e88bf73";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form id="search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city..."
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ backgroundColor: "transparent" }}
            autoComplete="off"
            autoCapitalize="on"
            onChange={handleCityChange}
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>
      </form>

      <div className="row">
        <div className="col weather-info">
          <div className="upperText">
            <h5 className="dateTime">{weatherData.date}</h5>
            <h2 className="weatherText">{weatherData.description}</h2>
            <h1 className="cityName">{weatherData.city}</h1>
          </div>
          <div className="temperatureUnit">
            <img src={weatherData.icon} alt={weatherData.description} />
            <h1 className="temperature">{weatherData.temperature}</h1>
            <span className="units">
              <a href="#">℃</a> | <a href="#">℉</a>
            </span>
          </div>
        </div>

        <div className="col temperature-info">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
  } else{
    search();
    return "Loading... ";
  }
}
