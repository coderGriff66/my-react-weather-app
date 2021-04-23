import React, { useState } from "react";
import axios from "axios";
import "./WeatherConditions.css";

export default function WeatherConditions() {
  const [weatherData, setWeatherData] = useState({ ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      barometer: response.data.main.pressure,
      humidity: response.data.main.humidity,
      winds: response.data.wind.speed,
      minTemp: response.data.weather.min_temp,
      city: response.data.name

    });
    
  }

   if (weatherData.ready) {
  return (
    <div className="WeatherConditions">
      <div className="row">
        <div className="col-7">
          <div className="Card Leftside">
            <h2 classNmae="text-capitalize">{weatherData.description}</h2>
            <div className="clearfix">
              <img src="/" alt="Clear_Sky" className="float-left"/>
                <span ClassName="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            </div>
          </div>
        </div>
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: {weatherData.feels_like}°</li>
              <li>Barometer: {weatherData.barometer}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Day's Low Temp: {weatherData.min_temp}°</li>
              </ul>
            </div>
          </div>
      </div>
    </div>

  );

} else {
  const apiKey="06e5d3dda0232566f39a1df37e2d5cdd";
  let city="Detroit";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}