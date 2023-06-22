import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Accra",
    dateTime: "Friday 12:00pm",
    weatherText: "Mostly Sunny",
    temperature: "30",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    humidity: "30",
    wind: "8"
  };

  return (
    <div className="Weather">
      <form id="search-form">
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
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>
      </form>

      <div className="row">
        <div className="col weather-info">
          <div className="upperText">
            <h5 className="dateTime">{weatherData.dateTime}</h5>
            <h2 className="weatherText">{weatherData.weatherText}</h2>
            <h1 className="cityName">{weatherData.city}</h1>
          </div>
          <div className="temperatureUnit">
            <img src={weatherData.imgUrl} alt={weatherData.weatherText} />
            <h1 className="temperature">{weatherData.temperature}</h1>
            <span className="units">
              <a href="/">℃</a> | <a href="/">℉</a>
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
}
