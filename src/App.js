import React from "react";
import WeatherConditions from "./WeatherConditions";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <WeatherConditions />
      <footer>
        This project coded by Jennifer Griffin and is 
      <a href="https://github.com/coderGriff66/my-react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}


