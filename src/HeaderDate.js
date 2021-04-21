import React from "react";

import "./HeaderDate.css";

export default function HeaderDate() {
  return(
    <div className="row">
          <div className="col-6">
            <h3 className="Header">Your Weather Forecast</h3>
          </div>
            <div className="col-6">
              <ul className="Today">
                <li>
                  <strong>Wednesday, April 21, 2021</strong>
                </li>
                <li>
                  <strong>3:58</strong>
                </li>
              </ul>
            </div>
          </div>
  )
}