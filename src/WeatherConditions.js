import React from "react";

import "./WeatherConditions.css";

export default function WeatherConditions() {
  return (
    <div className="WeatherConditions">
      <div className="row">
        <div className="col-7">
          <div className="Card Leftside">
          <img src="/" alt="Clear_Sky"/>
          10°C
          </div>
        </div>
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: 30°</li>
              <li>Barometer: 29.85</li>
              <li>Humidity: 45%</li>
              <li>Wind: 7 km/h</li>
              <li>Day's Low Temp: 25°</li>
              </ul>
            </div>
          </div>
      </div>
    </div>

     

      
      
      
      
  )

}