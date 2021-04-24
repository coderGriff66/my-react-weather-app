import React, { useState } from "react";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";
import "./SearchEngine.css";

export default function SearchEnginge() {
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
    <div>
    <form className="SearchEngine">
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control" autofocus="on" autocomplete="off"/>
            </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success"/>
               </div>
                  <div className="col-3">
                    <button className="CurrentButton">CURRENT</button>
                  </div>
          </div>
    </form>
      <div>
        <h1>{weatherData.city}</h1>
      </div>
        <WeatherConditions data={weatherData} />
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
