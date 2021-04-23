import React from "react";
import WeatherConditions from "./WeatherConditions";

import "./HeaderDate.css";

export default function HeaderDate(props) {

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
   <WeatherConditions  (response.data.dt * 1000) />
   let now = new Date(timestamp);
   let date = now.getDate();
   let day = days[props.date.getDay()];
   let month = months[props.date.getMonth()];
   let hours = props.date.getHours();
   if (hours < 10) {
     hours =`0${hours}`;
   }
   let minutes = props.date.getMinutes();
   if (minutes < 10) {
     minutes = `0${minutes}`;
   } 
  


  return(
    <div className="row">
          <div className="col-6">
            <h3 className="Header">Your Weather Forecast</h3>
          </div>
            <div className="col-6">
              <ul className="Today">
                <li>
                  <strong>{day}, {month} {date}, (year}</strong>
                </li>
                <li>
                  <strong>{hours}:{minutes}</strong>
                </li>
              </ul>
            </div>
          </div>
  );
}