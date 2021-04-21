import React from "react";

export default function WeatherConditions() {
  return (
    <div className="WeatherConditions">
      <div className="row">
        <div className="col-7">
          <img src="/" alt="Clear_Sky"/>
          10°C
        </div>
          <div className="col-5">
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

     

      
      
      
      
  )

}