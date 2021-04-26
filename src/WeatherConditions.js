import React from "react";


export default function WeatherConditions(props) {

  return (
    <div className="WeatherConditions">
      <div className="row">
        <div className="col-7">
          <div className="Card Leftside">
            <h2 classNmae="text-capitalize">{props.data.description}</h2>
            <div className="clearfix">
              <img src="/" alt="Clear_Sky" className="float-left"/>
                <span ClassName="temperature">{Math.round(props.data.temperature)}</span>
                <span className="unit">°C</span>
            </div>
          </div>
        </div>
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: <strong>{props.data.feels_like}°</strong></li>
              <li>Barometer: <strong>{props.data.barometer}</strong></li>
              <li>Humidity: <strong>{props.data.humidity}%</strong></li>
              <li>Wind: <strong>{props.data.wind} km/h</strong></li>
              <li>Day's Low Temp: <strong>{props.data.min_temp}°</strong></li>
              </ul>
            </div>
          </div>
      </div>
    </div>

  );
}